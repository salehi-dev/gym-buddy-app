import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function WorkoutForm() {
  const [form, setForm] = useState({
    exerciseName: "",
    duration: "",
  });
  const onChangeInput = (number: string) => (text: string) => {
    console.log(text);
    console.log(number);
  };

  return (
    <View style={styles.container}>
      <Text>Exercise Form</Text>
      <View>
        <TextInput
          value={form.exerciseName}
          placeholder="Exercise Name"
          style={styles.input}
          onChangeText={onChangeInput}
        />
        <TextInput
          value={form.duration}
          placeholder="Duration"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={onChangeInput}
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
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    borderColor: "gray",
    marginVertical: 7,
  },
  inputFocused: {
    borderColor: "#4DD0E1",
  },
});
