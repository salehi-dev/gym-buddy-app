import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

import { RootStackParamList } from "../navigations/Stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import PressableText from "../components/styled/PressableText";
import CustomModal from "../components/styled/CustomModal";
import { formatSec } from "../utils/time";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from "../types/data";
import { useCountDown } from "../hooks/useCountDown";

type Props = NativeStackScreenProps<RootStackParamList, "WorkDetail">;

export default function WorkoutDetailScreen({ route }: Props) {
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [trackerIdx, setTrackerIdx] = useState(-1);
  const workout = useWorkoutBySlug(route.params.slug);
  const countDown = useCountDown(
    trackerIdx,
    trackerIdx >= 0 ? sequence[trackerIdx].duration : -1
  );

  useEffect(() => {
    if (!workout) {
      return;
    }
    if (trackerIdx === workout.sequence.length - 1) {
      return;
    }
    if (countDown === 0) {
      addItemToSequence(trackerIdx + 1);
    }
  }, [countDown]);
  const addItemToSequence = (index: number) => {
    setSequence([...sequence, workout!.sequence[index]]);
    setTrackerIdx(index);
  };
  if (!workout) {
    return null;
  }
  return (
    <View style={styles.container}>
      <WorkoutItem
        item={workout}
        childStyle={{ marginTop: 10, marginBottom: 10, padding: 2 }}
      >
        <CustomModal
          activator={({ handleOpen }) => (
            <PressableText text="Check Sequence" onPress={handleOpen} />
          )}
        >
          <View>
            {workout.sequence.map((item, index) => (
              <View style={styles.sequenceItem} key={item.slug}>
                <Text>
                  {item.name} | {item.type} | {formatSec(item.duration)}
                </Text>
                {index !== workout.sequence.length - 1 && (
                  <FontAwesome name="arrow-down" size={20} />
                )}
              </View>
            ))}
          </View>
        </CustomModal>
      </WorkoutItem>
      <View>
        {sequence.length === 0 && (
          <FontAwesome
            name="play-circle-o"
            size={100}
            onPress={() => addItemToSequence(0)}
          />
        )}
        {sequence.length > 0 && countDown >= 0 && (
          <View>
            <Text>{countDown}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  sequenceItem: {
    alignItems: "center",
  },
});
