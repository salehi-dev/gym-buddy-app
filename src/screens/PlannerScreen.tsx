import { View, StyleSheet } from "react-native";
import WorkoutForm from "../components/WorkoutForm";

export default function PlannerScreen() {
  return (
    <View style={styles.container}>
      <WorkoutForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
