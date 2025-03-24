import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
		<Text
			style={[
				{ color },
				type === "default" ? styles.default : undefined,
				type === "title" ? styles.title : undefined,
				type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
				type === "subtitle" ? styles.subtitle : undefined,
				type === "link" ? styles.link : undefined,
				style,
	
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	default: {
		fontSize: 16,
		fontFamily: "Nunito",
	},
	defaultSemiBold: {
		fontSize: 18,
		lineHeight: 24,
		fontFamily: "NunitoBold",
	},
	title: {
		fontSize: 32,
		fontFamily: "NunitoBold",
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "Nunito",
	},
	link: {
		lineHeight: 30,
		fontSize: 16,
		color: "#0a7ea4",
		fontFamily: "Nunito",
	},
});
