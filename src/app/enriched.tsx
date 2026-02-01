import { StyleSheet, Text, View } from "react-native";
import { EnrichedMarkdownText } from "react-native-enriched-markdown";

const markdown = `
# Welcome to Markdown!

This is a paragraph with **bold**, *italic*, and [links](https://reactnative.dev).

- List item one
- List item two
  - Nested item

\`\`\`javascript
const greeting = 'Hello, World!';
console.log(greeting);
\`\`\`
`;

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>Hello World</Text>
				<EnrichedMarkdownText markdown={markdown} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
