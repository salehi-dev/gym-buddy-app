import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigations";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
