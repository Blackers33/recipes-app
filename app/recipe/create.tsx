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
	Pressable,
} from "react-native";
import ThemedButton from "@/components/ThemedButton";
import { router } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import DropdownSelect from "@/components/dropdown-select/src";

export default function RecipeCreateScreen() {
	console.log('DEBUG create.tsx')
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const [ingredients, setIngredients] = useState<string[]>([]);
	

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
					<View style={{ height: 30 }} />
					<DropdownSelect
						label='Ingredients list :'
						buttonLabel='Add ingredient'
						placeholder='Click on the button to start adding ingredients.'
						options={[
							{
								title: "Fruits",
								data: [
									{ label: "Pizza", value: "A" },
									{ label: "Burger", value: "B" },
									{ label: "Risotto", value: "C" },
								],
							},
							{
								title: "Vegetables",
								data: [
									{ label: "Ice cream", value: "D" },
									{ label: "Cheesecake", value: "E" },
								],
							},
							{
								title: "Dairy",
								data: [
									{ label: "Cheese", value: "F" },
									{ label: "Butter", value: "G" },
									{ label: "Pineapple", value: "H" },
								],
							},
							{
								title: "Uncategorized",
								data: [{ label: "Human flesh", value: "I" }],
							},
						]}
						selectedValue={ingredients}
						onValueChange={(itemValue: any) => setIngredients(itemValue)}
						isMultiple
						isSearchable
						primaryColor={"#1c2d6b"}
						checkboxControls={{
							checkboxDisabledStyle: {
								borderColor: "red",
								backgroundColor: "red",
							},
						}}
						listComponentStyles={{
							sectionHeaderStyle: {
								paddingVertical: 6,
								paddingHorizontal: 12,
								backgroundColor: "#1c2d6b",
								color: "white",
								borderRadius: 6,
								overflow: "hidden",
							},
						}}
						multipleSelectedItemStyle={{
							borderRadius: 100,
							backgroundColor: "hotpink",
							color: "black",
						}}
						dropdownIcon
					/>
				</View>
				<View style={styles.buttonsSection}>
					<ThemedButton variant='ghost' onPress={() => {
						console.log('back pressed');
						router.back();
					}}>
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
