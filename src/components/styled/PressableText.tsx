import { Pressable, Text, PressableProps, TextStyle } from "react-native";

interface PressableTextProps extends PressableProps {
  text: string;
  textStyle?: TextStyle;
}

export default function PressableText(props: PressableTextProps) {
  const { text, textStyle, ...pressableProps } = props;

  return (
    <Pressable {...pressableProps}>
      <Text style={[{ textDecorationLine: "underline" }, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
}
