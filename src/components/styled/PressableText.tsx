import { Pressable, Text, PressableProps } from "react-native";

export default function PressableText(
  props: PressableProps & { text: string }
) {
  return (
    <Pressable {...props}>
      <Text style={{ textDecorationLine: "underline" }}>{props.text}</Text>
    </Pressable>
  );
}
