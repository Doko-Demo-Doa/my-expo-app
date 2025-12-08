import { SheetRegister, SheetDefinition } from "react-native-actions-sheet";
import ExampleSheet from "./example-sheet";

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "example-sheet": SheetDefinition;
  }
}

export const Sheets = () => {
  return <SheetRegister sheets={{ "example-sheet": ExampleSheet }} />;
};
