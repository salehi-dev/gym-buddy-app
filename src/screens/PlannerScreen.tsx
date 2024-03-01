import { View, StyleSheet } from "react-native";
import WorkoutForm, { ExerciseForm } from "../components/WorkoutForm";

export default function PlannerScreen() {
  const handleFormSubmit = (form: ExerciseForm) => {
    alert(
      `${form.exerciseName} - ${form.duration} - ${form.reps} - ${form.type}`
    );
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
