import { ColorSchemeName } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import RootStack from "./Stack";

const RootNavigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      theme={colorScheme == "light" ? DefaultTheme : DarkTheme}
    >
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
