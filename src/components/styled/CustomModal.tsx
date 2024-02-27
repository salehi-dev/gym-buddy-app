import React, { FunctionComponent, useState } from "react";
import { View, Modal, StyleSheet } from "react-native";

import PressableText from "./PressableText";

type CustomModalProps = {
  activator?: FunctionComponent<{
    handleOpen: () => void;
  }>;
  children: React.ReactNode;
};
export default function CustomModal({
  activator: Activator,
  children,
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
          {children}
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
