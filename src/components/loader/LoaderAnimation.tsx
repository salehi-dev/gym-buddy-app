import { Text, StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

type LoaderAnimationProps = true | false;

export default function LoaderAnimation({
  isLoaded,
}: {
  isLoaded: LoaderAnimationProps;
}) {
  return (
    <AnimatedLoader
      visible={isLoaded}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("./loader.json")}
      animationStyle={styles.lottie}
      speed={1}
      loop={true}
    >
      <Text>Loading...</Text>
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
