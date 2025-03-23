import { StyleSheet, Image, Platform, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Animated from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";

export default function RecipesScreen() {
	return (
		<ThemedView style={styles.mainContainer}>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type='title'>Top Bar</ThemedText>
			</ThemedView>
			<Animated.ScrollView style={styles.scrollView}><ThemedText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias molestiae placeat deleniti sint, voluptatum at repellendus in, quidem dicta corporis, debitis ut vel aperiam quis impedit odio perferendis est. Ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa dolorum corrupti ipsum esse at fugiat nemo quidem doloremque cumque, sit rerum in molestiae pariatur nulla laudantium vel maxime nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque magnam iusto atque adipisci dicta incidunt in optio quos modi saepe vero molestias eveniet ipsum, eius perferendis, quibusdam illum libero? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident similique iure impedit placeat, quod neque blanditiis perferendis consectetur molestiae cum ipsum a aliquid perspiciatis inventore aspernatur quidem, non ratione quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ducimus voluptatem dignissimos enim temporibus architecto soluta eius? Laudantium nam a nobis repellat aliquam, fugiat sed? Ullam dolorem quibusdam nemo placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut beatae cupiditate quia cum, deserunt odit, sunt quam, alias fugiat repellat qui eveniet quis? Vero dolores facilis necessitatibus consequuntur maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis error cumque hic repellat debitis dolorem nihil recusandae quos blanditiis, ea rerum? Doloremque veritatis rem nesciunt reprehenderit quis sed dolor!</ThemedText></Animated.ScrollView>
      <ThemedView style={styles.button}><ThemedText>Add Recipe</ThemedText></ThemedView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	mainContainer: { flex: 1 },
	titleContainer: {
		flexDirection: "row",
		gap: 8,
		borderWidth: 1,
		borderColor: "red",
		padding: 32,
	},
	scrollView: {
		borderWidth: 1,
		borderColor: "blue",
	},
  button : {
    position: "absolute",
    backgroundColor : "lightblue",
    bottom : 20,
    right : 20,
    padding : 10,
    borderRadius : 100

  }
});
