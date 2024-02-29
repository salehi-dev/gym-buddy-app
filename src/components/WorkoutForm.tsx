import { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

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
  const { control } = useForm();
  return (
    <View style={styles.container}>
      <MontserratText>Exercise Form</MontserratText>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="exerciseName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
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
