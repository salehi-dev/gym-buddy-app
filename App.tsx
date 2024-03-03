import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigation from "./src/navigations";
import useCachedResources from "./src/hooks/useCachedResources";
import LoaderAnimation from "./src/components/loader/LoaderAnimation";

export default function App() {
  const colorScheme = useColorScheme();

  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <SafeAreaProvider>
        <RootNavigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  } else {
    return <LoaderAnimation isLoaded={!isLoaded} />;
  }
}
