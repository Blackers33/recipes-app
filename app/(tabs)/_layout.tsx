import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			initialRouteName='recipes'
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name='recipes'
				options={{
					title: "Recipes",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='restaurant-menu' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='index'
				options={{
					title: "List",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='format-list-bulleted' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='community-recipes'
				options={{
					title: "Community Recipes",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='language' color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
