import {
	TextInput,
	useColorScheme,
	StyleSheet,
	TextInputProps,
} from "react-native";

export function ThemedTextInput(props: TextInputProps) {
	const colorScheme = useColorScheme();

	return (
		<TextInput
			placeholderTextColor={colorScheme === "dark" ? "#aaa" : "#666"}
			style={[
				styles.input,
				{
					color: colorScheme === "dark" ? "#fff" : "#000",
					backgroundColor: colorScheme === "dark" ? "#333" : "#eee",
				},
				props.style,
			]}
			{...props}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		padding: 10,
		borderRadius: 8,
		marginTop: 10,
	},
});
