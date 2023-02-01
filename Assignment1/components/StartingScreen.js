import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  Modal,
} from "react-native";
import { React, useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function StartingScreen({
  emailUpdateFunction,
  phoneUpdateFunction,
  emailText,
  phoneText,
  signUpScreenVisible,
  resetFunction,
}) {
  const [validEmailText, setValidEmailText] = useState("");
  const [validPhoneText, setValidPhoneText] = useState("");
  let email = false;
  let phone = false;
  return (
    <Modal transparent={true} visible={signUpScreenVisible}>
      <View style={styles.textBox}>
        <Text style={styles.signUpText}>Sign up</Text>
      </View>
      <View style={styles.card}>
        <View>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={emailUpdateFunction}
            value={emailText}
          />
          <Text>{validEmailText}</Text>

          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={phoneUpdateFunction}
            value={phoneText}
          />
          <Text>{validPhoneText}</Text>
        </View>

        <View style={styles.buttons}>
          <Button
            onPress={() => {
              resetFunction();
              setValidEmailText("");
              setValidPhoneText("");
            }}
            title="Reset"
            color="red"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
  },
  textBox: {
    alignItems: "center",
    alignSelf: "center",
    width: 70,
    borderWidth: 2,
    marginBottom: 20,
    marginTop: 40,
    paddingVertical: 10,
    borderColor: "purple",
  },
  card: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "lightgrey",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    shadow: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  signUpText: {
    color: "purple",
  },
  inputTitle: {
    marginTop: 10,
    fontSize: 20,
  },
  input: {
    height: 30,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
});
