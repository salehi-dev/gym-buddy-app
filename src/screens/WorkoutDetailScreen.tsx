import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/Stack";

type Props = NativeStackScreenProps<RootStackParamList, "WorkDetail">;

export default function WorkoutDetailScreen({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slug - {route.params.slug}</Text>
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
