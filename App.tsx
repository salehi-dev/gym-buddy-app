import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Navigation from "./src/navigations";
import useCachedResources from "./src/hooks/useCachedResources";
import LoaderAnimation from "./src/components/loader/LoaderAnimation";

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
    return <LoaderAnimation isLoaded={!isLoaded} />;
  }
}
