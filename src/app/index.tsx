import { Button, Card } from "heroui-native";
import { useRouter } from "expo-router";
import { Text as RNText, View as RNView } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { withUniwind } from "uniwind";

const Text = withUniwind(RNText);
const View = withUniwind(RNView);

export default function Page() {
	const router = useRouter();

	return (
		<View className="flex-1 bg-background p-6">
			<View className="pt-16 pb-10 items-center">
				<Text className="text-4xl font-bold text-foreground mb-2">Welcome</Text>
				<Text className="text-lg text-muted">
					Explore the demo features below
				</Text>
			</View>

			<View className="flex-1 gap-4">
				<Card className="p-5">
					<Card.Body className="gap-4">
						<View className="gap-2">
							<Card.Title>Action Sheet</Card.Title>
							<Card.Description>
								Open a bottom sheet component with custom content
							</Card.Description>
						</View>
						<Button
							onPress={() => SheetManager.show("example-sheet")}
							className="self-start"
						>
							Show Sheet
						</Button>
					</Card.Body>
				</Card>

				<Card className="p-5">
					<Card.Body className="gap-4">
						<View className="gap-2">
							<Card.Title>Enriched Content</Card.Title>
							<Card.Description>
								View a page with markdown rendering support
							</Card.Description>
						</View>
						<Button
							onPress={() => router.push("/enriched")}
							variant="primary"
							className="self-start"
						>
							View Markdown
						</Button>
					</Card.Body>
				</Card>
			</View>
		</View>
	);
}
