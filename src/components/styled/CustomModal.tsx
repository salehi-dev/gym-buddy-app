import React, { FunctionComponent, useState } from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import PressableText from "./PressableText";

type CustomModalProps = {
  activator?: FunctionComponent<{
    handleOpen: () => void;
  }>;
};

export default function CustomModal({
  activator: Activator,
}: CustomModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {Activator ? (
        <Activator handleOpen={() => setIsModalVisible(true)} />
      ) : (
        <PressableText
          text="Check Sequence"
          onPress={() => setIsModalVisible(true)}
        />
      )}
      <Modal
        visible={isModalVisible}
        transparent={!isModalVisible}
        animationType="slide"
      >
        <View style={styles.closeBottm}>
          <Text>Hello there</Text>
          <PressableText
            text="Close"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  closeBottm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
});
