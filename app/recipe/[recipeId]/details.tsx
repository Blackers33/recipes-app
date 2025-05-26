import React from "react"
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function RecipeDetailsScreen(){
      const { recipeId } = useLocalSearchParams();
  return (
    <View>
      <ThemedText>Hello {recipeId}</ThemedText>
    </View>
  )
};


