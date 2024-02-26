import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./Stack";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
