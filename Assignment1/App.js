import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height;
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}></View>
      <LinearGradient
        colors={["rgb(140,205,242)", "rgb(118, 126, 181)"]}
        style={styles.background}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: ScreenHeight,
  },
  top: {
    margin: 10,
    alignItems: "center",
    width: "80%",
  },
});
