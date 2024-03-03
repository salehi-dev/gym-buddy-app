import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import slugify from "slugify";

import ExerciseForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType, Workout } from "../types/data";
import ExerciseItem from "../components/ExerciseItem";
import PressableText from "../components/styled/PressableText";
import CustomModal from "../components/styled/CustomModal";
import AppButton from "../components/styled/AppButtom";
import WorkoutForm, { WorkoutFormData } from "../components/WorkoutForm";
import { BottomTabsParamList } from "../navigations/BottomTab";
import { storeWorkout } from "../storage/workout";

export default function PlannerScreen() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<BottomTabsParamList>>();

  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);
  const handleExerciseSubmit = (form: ExerciseFormData) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(`${form.name} ${Date.now()}`, { lower: true }),
      name: form.name,
      duration: Number(form.duration),
      type: form.type as SequenceType,
    };
    if (form.reps) {
      sequenceItem.reps = form.reps;
    }
    setSeqItems([...seqItems, sequenceItem]);
  };
  const computeDiff = (exerciseCount: number, workoutDuration: number) => {
    const intensity = workoutDuration / exerciseCount;
    if (intensity <= 60) {
      return "hard";
    } else if (intensity <= 100) {
      return "medium";
    } else {
      return "easy";
    }
  };
  const handleWorkoutSubmit = async (form: WorkoutFormData) => {
    if (seqItems.length > 0) {
      const duration = seqItems.reduce((acc, item) => {
        return acc + item.duration;
      }, 0);
      const workout: Workout = {
        name: form.name,
        slug: slugify(`${form.name} ${Date.now()}`, { lower: true }),
        difficulty: computeDiff(seqItems.length, duration),
        duration,
        sequence: [...seqItems],
      };
      await storeWorkout(workout);
    } else {
      alert("You should create an exercise in create exercise form");
    }
  };
  const removeHandler = (index: number) => {
    const sequence = [...seqItems];
    sequence.splice(index, 1);
    setSeqItems(sequence);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ExerciseForm onSubmit={handleExerciseSubmit} />
        <View>
          <CustomModal
            activator={({ handleOpen }) => (
              <View style={{ marginBottom: 18 }}>
                <AppButton
                  textStyle={{ fontWeight: "500", fontSize: 18 }}
                  onPress={handleOpen}
                  title="Create Workout"
                />
              </View>
            )}
          >
            {({ handleClose }) => (
              <View>
                <WorkoutForm
                  onSubmit={async (data) => {
                    await handleWorkoutSubmit(data);
                    handleClose();
                    navigate("Home");
                  }}
                />
              </View>
            )}
          </CustomModal>
        </View>
        {seqItems.map((item, index) => (
          <ExerciseItem key={item.slug} item={item}>
            <PressableText
              textStyle={{ color: "#FAFAFA", textDecorationLine: "none" }}
              style={styles.customButtom}
              text="Remove"
              onPressIn={() => removeHandler(index)}
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
