import { View, Text, Alert, Button, StyleSheet, Modal } from "react-native";
import { React, useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ConfirmScreen(props) {
  console.log(props);
  return (
    <Modal
      style={styles.card}
      transparent={true}
      visible={props.confirmScreenVisible}
    >
      <View style={styles.card}>
        <Text style={styles.inputTitle}>You have entered:</Text>
        <Text>{props.emailText}</Text>
        <Text>{props.phoneText}</Text>
        <Text>Please confirm if they are correct</Text>
      </View>

      <View style={styles.buttons}>
        <Button
          onPress={() => props.confirmToSignUp()}
          title="Go back"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "column",
    width: 115,
    alignSelf: "center",
  },
  card: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 10,
    elevation: 5,
    shadow: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inputTitle: {
    marginTop: 10,
    fontSize: 20,
  },
});
