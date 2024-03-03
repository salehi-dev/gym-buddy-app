import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

import RootNavigation from "./src/navigations";
import useCachedResources from "./src/hooks/useCachedResources";
import LoaderAnimation from "./src/components/loader/LoaderAnimation";

export default function App() {
  const colorScheme = useColorScheme();

  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <>
        <RootNavigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return <LoaderAnimation isLoaded={!isLoaded} />;
  }
}
