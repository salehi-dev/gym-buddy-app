import React, { FunctionComponent, useState } from "react";
import { View, Modal, StyleSheet } from "react-native";

import PressableText from "./PressableText";

type CustomModalProps = {
  activator?: FunctionComponent<{
    handleOpen: () => void;
  }>;
  children: FunctionComponent<{
    handleOpen: () => void;
    handleClose: () => void;
  }>;
};
export default function CustomModal({
  activator: Activator,
  children,
}: CustomModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpen = () => {
    setIsModalVisible(true);
  };
  const handleClose = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      {Activator ? (
        <Activator handleOpen={handleOpen} />
      ) : (
        <PressableText text="Check Sequence" onPress={handleOpen} />
      )}
      <Modal
        visible={isModalVisible}
        transparent={!isModalVisible}
        animationType="slide"
      >
        <View style={styles.centerView}>
          <View style={styles.contentView}>
            {children({ handleOpen, handleClose })}
          </View>
          <PressableText text="Close" onPress={handleClose} />
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    marginBottom: 20,
  },
});
