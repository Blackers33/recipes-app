import { Colors } from "@/constants/Colors";
import React from "react";
import {
	GestureResponderEvent,
	StyleSheet,
	TextStyle,
	TouchableOpacity,
	useColorScheme,
	ViewProps,
} from "react-native";
import { IconSymbol } from "./ui/IconSymbol";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";

type Variant = Record<"dark" | "light", { button: TextStyle; text: TextStyle }>;

const variants = {
	primary: {
		light: {
			button: { backgroundColor: Colors.light.primary },
			text: { color: Colors.dark.text },
		},
		dark: {
			button: { backgroundColor: Colors.dark.primary },
			text: { color: Colors.dark.text },
		},
	} satisfies Variant,

	secondary: {
		light: {
			button: { backgroundColor: Colors.light.secondary },
			text: { color: Colors.dark.text },
		},
		dark: {
			button: { backgroundColor: Colors.dark.secondary },
			text: { color: Colors.dark.text },
		},
	} satisfies Variant,

	ghost: {
		light: {
			button: { borderColor: Colors.light.primary, borderWidth: 1 },
			text: { color: Colors.light.primary },
		},
		dark: {
			button: { borderColor: Colors.light.primary, borderWidth: 1 },
			text: { color: Colors.light.primary },
		},
	} satisfies Variant,

	grey: {
		light: {
			button: { backgroundColor: "grey" },
			text: { color: "white" },
		},
		dark: {
			button: { backgroundColor: "grey" },
			text: { color: "white" },
		},
	} satisfies Variant,
};

type ThemedButtonProps = ViewProps & {
	onPress: (event?: GestureResponderEvent) => void;
	variant?: keyof typeof variants;
	icon?: React.ComponentProps<typeof MaterialIcons>["name"];
};

export default function ThemedButton({
	variant = "primary",
	icon,
	children,
	onPress,
	...props
}: ThemedButtonProps) {
	const theme = useColorScheme();

	console.log(Boolean(children));

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[variants[variant][theme ?? "light"].button, styles.container, props.style]}
		>
			{icon && (
				<IconSymbol
					size={20}
					color={variants[variant][theme ?? "light"].text.color}
					name={icon}
				/>
			)}
			{children && (
				<ThemedText
					style={StyleSheet.flatten([
						variants[variant][theme ?? "light"].text,
						{ paddingHorizontal: 10 },
					])}
				>
					{children}
				</ThemedText>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignSelf: "flex-start",
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 100,
	},
});
