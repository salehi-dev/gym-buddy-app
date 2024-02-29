import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { MontserratText } from "./styled/MontserratText";
import PressableText from "./styled/PressableText";

export type ExerciseForm = {
  exerciseName: string;
  duration: string;
};
type WorkoutProps = {
  onSubmit: (form: ExerciseForm) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutProps) {
  const [form, setForm] = useState({
    exerciseName: "",
    duration: "",
  });
  const onChangeInput = (exerciseName: string) => (text: string) => {
    setForm({
      ...form,
      [exerciseName]: text,
    });
  };
  return (
    <View style={styles.container}>
      <MontserratText>Exercise Form</MontserratText>
      <View style={styles.formContainer}>
        <TextInput
          value={form.exerciseName}
          placeholder="Exercise Name"
          style={styles.input}
          onChangeText={onChangeInput("exerciseName")}
        />
        <TextInput
          value={form.duration}
          placeholder="Duration (seconds)"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={onChangeInput("duration")}
        />
        <PressableText text="Submit" onPress={() => onSubmit(form)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  formContainer: {
    margin: 12,
  },
  input: {
    height: 40,
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
  },
  inputFocused: {
    borderColor: "#4DD0E1",
  },
});
