import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "montserrat-regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);
  return isLoadingComplete;
}
