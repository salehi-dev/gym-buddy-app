import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/Stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import PressableText from "../components/styled/PressableText";
import CustomModal from "../components/styled/CustomModal";
import { formatSec } from "../utils/time";

type Props = NativeStackScreenProps<RootStackParamList, "WorkDetail">;

export default function WorkoutDetailScreen({ route }: Props) {
  const workout = useWorkoutBySlug(route.params.slug);
  if (!workout) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.name}</Text>
      <CustomModal
        activator={({ handleOpen }) => (
          <PressableText text="Check Sequence" onPress={handleOpen} />
        )}
      >
        <View>
          {workout.sequence.map((item) => (
            <Text key={item.slug}>
              {item.name} | {item.type} | {formatSec(item.duration)}
            </Text>
          ))}
        </View>
      </CustomModal>
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
});
