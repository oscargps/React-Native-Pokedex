import React from "react";
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text } from "react-native";
import Favorite from "../screens/Favorite"
const Stack = createNativeStackNavigator();

export default function FavoriteNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorita" component={Favorite} />
      </Stack.Navigator>
    );
}