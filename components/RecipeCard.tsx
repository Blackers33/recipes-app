import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import {
	Image,
	StyleSheet,
	TouchableOpacity,
	useColorScheme,
} from "react-native";
import ThemedButton from "./ThemedButton";
import Animated from "react-native-reanimated";

declare module "react-native" {
	interface ImageStyle {
		filter?: string;
	}
}

export default function RecipeCard({ recipe }) {
	function stringShortener(string : string) {
		const maxLength = 28;
		if (string.length > maxLength) {
			return string.substring(0, maxLength) + "...";
		}
		return string;
	}

	const isDarkTheme = useColorScheme() === "dark";
	return (
		<TouchableOpacity onPress={() => console.log("pressed Card")}>
			<ThemedView style={styles.mainContainer}>
				<ThemedView style={styles.imageContainer}>
					<Animated.Image
						source={require("../assets/images/placeholder.png")}
						style={[
							styles.image,
							{ filter: isDarkTheme ? "invert(90%)" : "none" },
						]}
					/>

					<ThemedButton
						variant='grey'
						icon='bookmark-outline'
						style={styles.bookmarkButton}
						onPress={() => console.log("pressed Bookmark")}
					/>
				</ThemedView>
				<ThemedText type='defaultSemiBold'>
					{stringShortener(recipe.title)}
				</ThemedText>
				<ThemedText type='default' style={styles.subtext}>
					This is a subtitle
				</ThemedText>
			</ThemedView>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		width: 170,
		height: 260,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "rgba(128,128,128,.2)",
		padding: 5,
		shadowColor: "rgba(128,128,128,.2)",
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 5,
		elevation: 5,
		gap: 5,
		overflow: "hidden",
	},
	imageContainer: {
		width: 160,
		height: 160,
		borderWidth: 2,
		borderRadius: 8,
		borderColor: "rgba(128,128,128,.4)",
		overflow: "hidden",
	},
	image: {
		width: "101%",
		height: "101%",
		resizeMode: "cover",
	},
	bookmarkButton: {
		position: "absolute",
		top: 5,
		right: 5,
		borderRadius: 8,
		opacity: 0.8,
	},
	subtext: {
		color: "grey",
		fontSize: 12,
	},
});
