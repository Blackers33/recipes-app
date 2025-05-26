import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import {
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	View,
	Platform,
} from "react-native";
import ThemedButton from "@/components/ThemedButton";
import { router } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";

export default function RecipeCreateScreen() {
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	//const [ingredients, setIngredients] = useState<string>('')

	const database = useSQLiteContext();

	async function handleSave() {
		if (!name) return;
		try {
			database.runAsync(
				"INSERT INTO recipes (name, description) VALUES (?,?);",
				[name, description]
			);
			router.back();
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={0}
		>
			<ThemedView style={styles.mainContainer}>
				<View>
					<ThemedText>Coucou</ThemedText>
					<ThemedTextInput
						placeholder='Name'
						value={name}
						onChangeText={(text) => setName(text)}
					/>
					<ThemedTextInput
						placeholder='Description'
						value={description}
						onChangeText={(text) => setDescription(text)}
					/>
				</View>
				<View style={styles.buttonsSection}>
					<ThemedButton variant='ghost' onPress={() => router.back()}>
						Cancel
					</ThemedButton>
					<ThemedButton onPress={handleSave}>Create recipe</ThemedButton>
				</View>
			</ThemedView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	mainContainer: { flex: 1, padding: 10, justifyContent: "space-between", paddingBottom: 90},
	buttonsSection: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
});
