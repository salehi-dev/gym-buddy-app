import {
  Pressable,
  Text,
  PressableProps,
  TextStyle,
  StyleProp,
} from "react-native";

export type PressableTextProps = PressableProps & {
  text: string;
  textStyle?: StyleProp<TextStyle>;
};
export default function PressableText(props: PressableTextProps) {
  const { text, textStyle, ...pressableProps } = props;
  return (
    <Pressable {...pressableProps}>
      <Text
        style={[{ textDecorationLine: "underline"}, textStyle]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
