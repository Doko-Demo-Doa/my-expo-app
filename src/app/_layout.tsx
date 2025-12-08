import "../global.css";
import { Slot } from "expo-router";
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SheetProvider } from "react-native-actions-sheet";
import { Sheets } from "../components/rnas/sheets";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SheetProvider>
        <HeroUINativeProvider>
          <Slot />
          <Sheets />
        </HeroUINativeProvider>
      </SheetProvider>
    </GestureHandlerRootView>
  );
}
