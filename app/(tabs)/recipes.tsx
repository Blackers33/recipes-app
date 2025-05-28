import { FlatList, StyleSheet, View } from "react-native";

import RecipeCard from "@/components/RecipeCard";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCallback, useEffect, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";


export type Recipe = {
	id: number;
	name: string;
	desciption?: string
};


export default function RecipesScreen() {
	console.log("DEBUG recipes.tsx");


	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const database = useSQLiteContext();
	async function loadData() {
		const result = await database.getAllAsync<Recipe>("SELECT * FROM recipes;");
		setRecipes(result);
	}

	useFocusEffect(
		useCallback(() => {
			loadData();
		}, [])
	);



	return (
		<ThemedView style={styles.mainContainer}>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type='title'>Top Bar</ThemedText>
			</ThemedView>

			<FlatList
				data={recipes}
				renderItem={({ item }) => <RecipeCard recipe={item} />}
				contentContainerStyle={{ gap: 10, marginVertical: 10 }}
				columnWrapperStyle={{ justifyContent: "space-evenly" }}
				numColumns={2}
			/>

			<View style={styles.bottomRightButton}>
				<ThemedButton
					icon='add'
					onPress={() => router.push('/recipe/create')}
				>
					Add Recipe
				</ThemedButton>
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	mainContainer: { flex: 1 },
	titleContainer: {
		flexDirection: "row",
		gap: 8,
		borderBottomWidth: 1,
		borderColor: "grey",
		padding: 20,
		paddingTop: 32,
	},
	bottomRightButton: {
		position: "absolute",
		bottom: 20,
		right: 20,
	},
});
