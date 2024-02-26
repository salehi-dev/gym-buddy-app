import { FontAwesome, Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";


import { createStackNavigator } from '@react-navigation/stack';

type RootStackNavigatorParamsList = {
  Home: undefined;
  Details: undefined;
};






export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createStackNavigator<RootStackNavigatorParamsList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkoutDetail"
        component={WorkoutDetailScreen}
        options={{ title: "Workout Info" }}
      />
    </Stack.Navigator>
  );
}
const BottomTab = createBottomTabNavigator<AppNavigationParams>();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Planner"
        component={PlannerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}