import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import StartingScreen from "./components/StartingScreen";
let ScreenHeight = Dimensions.get("window").height;
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [emailText, onChangeEmailAddress] = useState("");
  const [phoneText, onChangePhoneNumber] = useState("");
  const emailUpdateFunction = (text) => {
    onChangeEmailAddress(text);
  };
  const phoneUpdateFunction = (text) => {
    onChangePhoneNumber(text);
  };
  const signUpToConfirm = () => {
    setConfirmScreenVisible(true);
    setSignUpScreenVisible(false);
  };

  const resetFunction = () => {
    onChangeEmailAddress("");
    onChangePhoneNumber("");
  };

  const [signUpScreenVisible, setSignUpScreenVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}></View>
      <StartingScreen
        emailText={emailText}
        phoneText={phoneText}
        emailUpdateFunction={emailUpdateFunction}
        phoneUpdateFunction={phoneUpdateFunction}
        signUpToConfirm={signUpToConfirm}
        signUpScreenVisible={signUpScreenVisible}
        resetFunction={resetFunction}
      />
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
