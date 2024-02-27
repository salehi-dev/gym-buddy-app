import { View, Text, StyleSheet, Modal } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/Stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import PressableText from "../components/styled/PressableText";
import { useState } from "react";
import CustomModal from "../components/styled/CustomModal";

type Props = NativeStackScreenProps<RootStackParamList, "WorkDetail">;

export default function WorkoutDetailScreen({ route }: Props) {
  const workout = useWorkoutBySlug(route.params.slug);
  if (!workout) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.name}</Text>
      <CustomModal
        activator={({ handleOpen }) => (
          <PressableText text="Check Sequence" onPress={handleOpen} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
