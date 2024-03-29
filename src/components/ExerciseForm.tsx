import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { MontserratText } from "./styled/MontserratText";
import PressableText from "./styled/PressableText";

export type ExerciseFormData = {
  name: string;
  duration: string;
  type: string;
  reps?: number;
};
type WorkoutProps = {
  onSubmit: (form: ExerciseFormData) => void;
};
const selectionItems = ["exercise", "break", "stritch"];

export default function ExerciseForm({ onSubmit }: WorkoutProps) {
  const { control, handleSubmit } = useForm();
  const [isSelectionOn, setIsSelectionOn] = useState(false);
  return (
    <View style={styles.container}>
      <MontserratText
        style={{ color: "black", textAlign: "center", marginBottom: 5 }}
      >
        Create Exercise
      </MontserratText>
      <View style={styles.formContainer}>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Exercise Name"
                placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
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
                placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
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
                placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
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
              <View style={{ flex: 1 }}>
                {isSelectionOn ? (
                  <View>
                    {selectionItems.map((item) => (
                      <PressableText
                        key={item}
                        style={styles.selection}
                        text={item}
                        onPressIn={() => {
                          onChange(item);
                          setIsSelectionOn(false);
                        }}
                      />
                    ))}
                  </View>
                ) : (
                  <TextInput
                    placeholder="Type"
                    placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                    style={styles.input}
                    onPressIn={() => setIsSelectionOn(true)}
                    value={value}
                  />
                )}
              </View>
            )}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableText
            text="Add"
            onPress={handleSubmit((data) => {
              onSubmit(data as ExerciseFormData);
            })}
            style={styles.customButtom}
            textStyle={{
              color: "#FAFAFA",
              textDecorationLine: "none",
            }}
          />
        </View>
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
    flex: 1,
    height: 40,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
  rowContainer: {
    flexDirection: "row",
  },
  selection: {
    margin: 2,
    padding: 3,
    alignSelf: "center",
  },
  customButtom: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    backgroundColor: "crimson",
    padding: 5,
    borderRadius: 5,
    marginTop: 15,
  },
});
