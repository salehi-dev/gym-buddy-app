import { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { MontserratText } from "./styled/MontserratText";
import PressableText from "./styled/PressableText";

export type ExerciseForm = {
  exerciseName: string;
  duration: string;
  type: string;
  reps?: number;
};
type WorkoutProps = {
  onSubmit: (form: ExerciseForm) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutProps) {
  const { control, handleSubmit } = useForm();
  return (
    <View style={styles.container}>
      <MontserratText style={{ color: "black" }}>Exercise Form</MontserratText>
      <View style={styles.formContainer}>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="exerciseName"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Exercise Name"
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="duration"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Duration (seconds)"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            name="reps"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Repetitions (optional)"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="type"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Type"
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
        <PressableText
          text="Submit"
          onPress={handleSubmit((data) => {
            onSubmit(data as ExerciseForm);
          })}
        />
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
    marginVertical: 8,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
  inputFocused: {
    borderColor: "#4DD0E1",
  },
  rowContainer: {
    flexDirection: "row",
  },
});
