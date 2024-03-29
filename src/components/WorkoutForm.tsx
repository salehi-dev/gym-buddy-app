import { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

import PressableText from "./styled/PressableText";

export type WorkoutFormData = {
  name: string;
};
type WorkoutProps = {
  onSubmit: (form: WorkoutFormData) => void;
};
export default function WorkoutForm({ onSubmit }: WorkoutProps) {
  const { control, handleSubmit } = useForm();
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Workout Name"
            placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />
      <View style={{ alignItems: "center" }}>
        <PressableText
          text="Confirm"
          onPress={handleSubmit((data) => {
            onSubmit(data as WorkoutFormData);
          })}
          style={styles.customButtom}
          textStyle={{
            color: "#FAFAFA",
            textDecorationLine: "none",
            fontSize: 17,
          }}
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
    paddingBottom: 2,
    marginBottom: 20,
  },
  formContainer: {
    marginVertical: 8,
  },
  input: {
    width: 280,
    height: 45,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
  customButtom: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "crimson",
    padding: 5,
    borderRadius: 5,
    marginTop: 15,
  },
});
