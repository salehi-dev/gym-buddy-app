import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  viewStyle,
  textStyle,
  ...restProps
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    {...restProps}
    style={[styles.appButtonContainer, viewStyle]}
  >
    <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#2979FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
