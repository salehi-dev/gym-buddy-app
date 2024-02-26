import React from "react";
import { Text } from "react-native";

export function MontserratText(props: Text["props"]) {
  return (
    <Text style={[{ fontFamily: "montserrat" }, props.style]}>
      {props.children}
    </Text>
  );
}
