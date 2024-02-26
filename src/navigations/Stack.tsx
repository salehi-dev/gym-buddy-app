import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";
import { BottomTab } from "./BottomTab";

export type RootStackParamList = {
  BottomTab: undefined;
  WorkDetail: { slug: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkDetail"
        component={WorkoutDetailScreen}
        options={{ title: "WORKOUT INFO" }}
      />
    </Stack.Navigator>
  );
};
export default RootStack;
