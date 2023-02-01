import { useState } from "react";
import { StyleSheet, View, SafeAreaView, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height;

import { LinearGradient } from "expo-linear-gradient";
import StartingScreen from "./components/StartingScreen";
import ConfirmScreen from "./components/ConfirmScreen";
import FinishScreen from "./components/FinishScreen";

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

  const confirmToSignUp = () => {
    setConfirmScreenVisible(false);
    setSignUpScreenVisible(true);
  };

  const resetFunction = () => {
    onChangeEmailAddress("");
    onChangePhoneNumber("");
  };
  const finishConfirm = () => {
    setFinishConfirmCardVisible(true);
    setConfirmScreenVisible(false);
  };

  const finishLater = () => {
    setFinishLaterCardVisible(true);
    setConfirmScreenVisible(false);
  };

  const startAgain = () => {
    setFinishConfirmCardVisible(false);
    setFinishLaterCardVisible(false);
    setSignUpScreenVisible(true);
    resetFunction();
  };

  const [signUpScreenVisible, setSignUpScreenVisible] = useState(true);
  const [confirmScreenVisible, setConfirmScreenVisible] = useState(false);
  const [finishConfirmCard, setFinishConfirmCardVisible] = useState(false);
  const [finishLaterCard, setFinishLaterCardVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <StartingScreen
          emailText={emailText}
          phoneText={phoneText}
          emailUpdateFunction={emailUpdateFunction}
          phoneUpdateFunction={phoneUpdateFunction}
          signUpToConfirm={signUpToConfirm}
          signUpScreenVisible={signUpScreenVisible}
          resetFunction={resetFunction}
        />
        <ConfirmScreen
          emailText={emailText}
          phoneText={phoneText}
          confirmToSignUp={confirmToSignUp}
          confirmScreenVisible={confirmScreenVisible}
          finishConfirm={finishConfirm}
          finishLater={finishLater}
        />
        <FinishScreen
          finishConfirmCard={finishConfirmCard}
          finishLaterCard={finishLaterCard}
          startAgain={startAgain}
          phoneText={phoneText}
        />
      </View>
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
