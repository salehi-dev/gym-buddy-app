import { useColorScheme } from "react-native";
import { PressableTextProps } from "./PressableText";
import PressableText from "./PressableText";
export default function PressableThemeText(props: PressableTextProps) {
  const colorScheme = useColorScheme();
  const color = colorScheme === "light" ? "#000" : "#fff";
  return <PressableText {...props} textStyle={[props.textStyle, { color }]} />;
}
