import React, { ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SequenceItem } from "../types/data";
import { MontserratText } from "./styled/MontserratText";
import { formatSec } from "../utils/time";

export default function ExerciseItem({
  item,
  children,
}: {
  item: SequenceItem;
  children: ReactNode;
}) {
  return (
    <View style={styles.container}>
      <MontserratText style={styles.name}>{item.name}</MontserratText>
      <View>
        {item.reps ? (
          <MontserratText style={styles.seqInfo}>
            Repetations: <Text style={styles.info}>x{item.reps}</Text>
          </MontserratText>
        ) : (
          <MontserratText style={styles.seqInfo}>
            Repetations: <Text style={styles.info}>--</Text>
          </MontserratText>
        )}
        <MontserratText style={styles.seqInfo}>
          Duration: <Text style={styles.info}>{formatSec(item.duration)}</Text>
        </MontserratText>
        <MontserratText style={styles.seqInfo}>
          Type: <Text style={styles.info}>{item.type}</Text>
        </MontserratText>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#D7CCC8",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 8,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
  },
  seqInfo: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
    paddingVertical: 4,
  },
  info: {
    color: "#455A64",
    fontSize: 14,
    fontWeight: "500",
  },
});
