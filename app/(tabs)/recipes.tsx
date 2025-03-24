import { FlatList, StyleSheet, View } from "react-native";

import RecipeCard from "@/components/RecipeCard";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function RecipesScreen() {

	const recipes = [
		{ id: "1", title: "Avocats à la tomate" },
		{
			id: "2",
			title: "Tomate aux Avocats, béchamel et camembert",
		},
		{ id: "3", title: "Thon à l'islandaise" },
		{ id: "4", title: "Poireaux sauce frites" },

		{ id: "5", title: "Le fameux tartare d'antan de la mère Chirac" },
	];

	return (
		<ThemedView style={styles.mainContainer}>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type='title'>Top Bar</ThemedText>
			</ThemedView>
		
				<FlatList
					data={recipes}
					renderItem={({ item }) => <RecipeCard recipe={item} />}
					keyExtractor={(item) => item.id}
					contentContainerStyle={styles.recipeContainer}

				/>
		
			<View style={styles.bottomRightButton}>
				<ThemedButton icon='add' onPress={() => console.log("pressed Add Recipe")}>
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
	recipeContainer: {
		rowGap: 10,
		marginVertical: 20,
		flexWrap : "wrap",
		flexDirection: "row",
		justifyContent : "space-evenly"
	},
});
