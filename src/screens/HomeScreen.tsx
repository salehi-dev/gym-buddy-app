import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import WorkoutItem from "../components/WorkoutItem";
import { Workout } from "../types/data";
import { MontserratText } from "../components/styled/MontserratText";
import { RootStackParamList } from "../navigations/Stack";
import { getWorkouts } from "../storage/workout";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}>New Workouts</MontserratText>
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
