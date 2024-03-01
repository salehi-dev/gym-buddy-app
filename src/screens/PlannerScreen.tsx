import { View, StyleSheet } from "react-native";
import WorkoutForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";

export default function PlannerScreen() {
  const handleFormSubmit = (form: ExerciseFormData) => {
    const sequenceItem: SequenceItem = {
      slug: `${form.exerciseName.split(" ").join("")}${Date.now()}`,
      name: form.exerciseName,
      duration: Number(form.duration),
      type: form.type as SequenceType,
    };
    if (form.reps) {
      sequenceItem.reps = form.reps;
    }
    console.log(sequenceItem);
  };
  return (
    <View style={styles.container}>
      <WorkoutForm onSubmit={handleFormSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
