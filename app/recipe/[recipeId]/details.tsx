import React from "react"
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function RecipeDetailsScreen(){
      const { recipeId } = useLocalSearchParams();
  return (
    <div>
      <Text>{recipeId}</Text>
    </div>
  )
};


