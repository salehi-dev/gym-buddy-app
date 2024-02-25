import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigations";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
