import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import slugify from "slugify";

import WorkoutForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";
import ExerciseItem from "../components/ExerciseItem";
import PressableText from "../components/styled/PressableText";

export default function PlannerScreen() {
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);
  const handleFormSubmit = (form: ExerciseFormData) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(`${form.exerciseName} ${Date.now()}`, { lower: true }),
      name: form.exerciseName,
      duration: Number(form.duration),
      type: form.type as SequenceType,
    };
    if (form.reps) {
      sequenceItem.reps = form.reps;
    }
    setSeqItems([...seqItems, sequenceItem]);
  };
  const removeHandler = (item: SequenceItem, index: number) => {
    const sequence = [...seqItems];
    sequence.splice(index, 1);
    setSeqItems(sequence);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="on-drag"
    >
      <View style={styles.container}>
        <WorkoutForm onSubmit={handleFormSubmit} />
        {seqItems.map((item, index) => (
          <ExerciseItem key={item.slug} item={item}>
            <PressableText
              textStyle={{ color: "#FAFAFA", textDecorationLine: "none" }}
              style={styles.customButtom}
              text="Remove"
              onPressIn={() => removeHandler(item, index)}
            />
          </ExerciseItem>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  customButtom: {
    alignItems: "center",
    width: 80,
    backgroundColor: "crimson",
    padding: 5,
    borderRadius: 5,
    marginTop: 15,
  },
});
