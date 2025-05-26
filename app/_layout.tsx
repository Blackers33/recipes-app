import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
	SQLiteProvider,
	type SQLiteDatabase,
} from "expo-sqlite";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
		NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
	});

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  async function createDbIfNeeded(db: SQLiteDatabase) {
		console.log("creating database if needed");
		await db.execAsync(
			"CREATE TABLE IF NOT EXISTS recipes(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, ingredients TEXT, description TEXT);"
		);
	}

  return (
		<SQLiteProvider databaseName='database.db' onInit={createDbIfNeeded}>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen
						name='recipe/create'
						options={{ title: "Créer une recette" }}
					/>
					<Stack.Screen name='+not-found' />
					<Stack.Screen name='recipe/[recipeId]/edit' />
					<Stack.Screen name='recipe/[recipeId]/details' />
				</Stack>
				<StatusBar style='auto' />
			</ThemeProvider>
		</SQLiteProvider>
	);
}
