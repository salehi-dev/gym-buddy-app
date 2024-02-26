import { View, Text, StyleSheet } from "react-native";
import { Workout } from "../types/data";
import React from "react";
import { formatSec } from "../utils/time";

export default function WorkoutItem({ item }: { item: Workout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>Duration: {formatSec(item.duration)}</Text>
      <Text style={styles.defficulty}>Defficulty: {item.difficulty}</Text>
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
  duration: {
    fontSize: 15,
  },
  defficulty: {
    fontSize: 15,
  },
});
