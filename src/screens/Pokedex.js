import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
export default function PokedexScreen() {
	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);

	useEffect(() => {
		(async () => {
			console.log("Loading Pokedex...");
			await loadPokemons();
		})();
	}, []);
	const loadPokemons = async () => {
		try {
			const response = await getPokemonsApi(nextUrl);
			setNextUrl(response.next);

			const pokemonsArray = [];
			for await (const pokemon of response.results) {
				const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
				pokemonsArray.push({
					id: pokemonDetails.id,
					name: pokemonDetails.name,
					type: pokemonDetails.types[0].type.name,
					order: pokemonDetails.order,
					imagen: pokemonDetails.sprites.other["official-artwork"].front_default
				});
			}
			setPokemons([...pokemons, ...pokemonsArray]);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			<PokemonList
				pokemons={pokemons}
				loadPokemons={loadPokemons}
				isNext={nextUrl}
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	AndroidSafeArea: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	}
});
