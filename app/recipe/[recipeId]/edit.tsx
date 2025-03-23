import React from "react"
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import ThemedButton from "@/components/ThemedButton";

export default function RecipeEditScreen(){
      const { recipeId } = useLocalSearchParams();
  return (
    <View>
      <Text>Edit {recipeId}</Text>
    </View>
  )
};


