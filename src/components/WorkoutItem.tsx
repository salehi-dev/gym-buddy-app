import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Workout } from "../types/data";
import React from "react";
import { formatSec } from "../utils/time";

export default function WorkoutItem({
  item,
  children,
  childStyle = {},
}: {
  item: Workout;
  children?: React.ReactNode;
  childStyle?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>Duration: {formatSec(item.duration)}</Text>
      <Text style={styles.details}>Defficulty: {item.difficulty}</Text>
      <View style={childStyle}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    fontSize: 15,
    margin: 1,
    padding: 2,
  },
});
