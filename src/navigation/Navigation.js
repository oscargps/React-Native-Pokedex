import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import{Image}from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{ tabBarLabel: "", tabBarIcon: () => renderPokeball() }}
      />
      <Tab.Screen
        name="Mi Cuenta"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.webp")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
