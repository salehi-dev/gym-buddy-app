import React from "react";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import WorkoutItem from "../components/WorkoutItem";
import { RootStackParamList } from "../navigations/Stack";
import { useWorkouts } from "../hooks/useWorkouts";
import ThemeText from "../components/styled/ThemeText";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const workouts = useWorkouts();

  return (
    <View style={styles.container}>
      <ThemeText style={styles.header}>New Workouts</ThemeText>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WorkDetail", { slug: item.slug })
              }
            >
              <WorkoutItem item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "montserrat-bold",
  },
});
