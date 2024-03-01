import { useState } from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import slugify from "slugify";

import WorkoutForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";
import ExerciseItem from "../components/ExerciseItem";

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
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="on-drag"
    >
      <View style={styles.container}>
        <WorkoutForm onSubmit={handleFormSubmit} />
        {seqItems.map((item) => (
          <ExerciseItem item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
