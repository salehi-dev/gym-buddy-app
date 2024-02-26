import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppNavigationParams } from "../navigations";
import WorkoutItem from "../components/WorkoutItem";
import data from "../data/data.json";
import { Workout } from "../types/data";
import { MontserratText } from "../components/styled/MontserratText";

type Props = NativeStackScreenProps<AppNavigationParams, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}>New Workouts</MontserratText>
      <FlatList
        data={data as Workout[]}
        keyExtractor={(item) => item.slug}
        renderItem={WorkoutItem}
      />
    </View>
  );
}
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
