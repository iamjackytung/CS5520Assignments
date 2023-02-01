import { View, Text, Button, StyleSheet, Modal, Image } from "react-native";
import { React } from "react";

export default function FinishScreen(props) {
  const id = props.phoneText.charAt(props.phoneText.length - 1);
  return (
    <>
      <Modal transparent={true} visible={props.finishConfirmCard}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Thank you for signing up. Here's a picture for you based on the last
            digit of your phone number.
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/id/${id}/100/100.jpg`,
            }}
          />
          <View style={styles.buttons}>
            <Button
              onPress={() => props.startAgain()}
              title="Start Again"
              color="red"
            />
          </View>
        </View>
      </Modal>
      <Modal transparent={true} visible={props.finishLaterCard}>
        <View style={styles.card}>
          <Text style={styles.title}>Sorry to see you go.</Text>
          <Image
            style={styles.image}
            source={require("../assets/sad-face.png")}
          />
          <View style={styles.buttons}>
            <Button
              onPress={() => props.startAgain()}
              title="Start Again"
              color="red"
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "column",
  },
  card: {
    width: "80%",
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
    borderColor: "grey",
    backgroundColor: "lightgrey",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 10,
    elevation: 5,
    shadow: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    margin: 10,
    fontSize: 20,
    color: "purple",
  },
  image: {
    width: 100,
    height: 100,
  },
});
