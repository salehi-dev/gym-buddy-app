import React from "react";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import WorkoutItem from "../components/WorkoutItem";
import data from "../data/data.json";
import { Workout } from "../types/data";
import { MontserratText } from "../components/styled/MontserratText";
import { RootStackParamList } from "../navigations/Stack";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}>New Workouts</MontserratText>
      <FlatList
        data={data as Workout[]}
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
