import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export default function GoalInput({
  disp,
  val,
  change,
  displaymodal,
  closemodal,
}) {
  return (
    <Modal visible={displaymodal}>
      <View style={styles.addgoal}>
        <TextInput
          style={styles.input}
          placeholder="Enter your goals"
          value={val}
          cur
          onChangeText={(text) => change(text)}
        />
        <View style={styles.buttonstyle}>
          <Button title="Add Goal" onPress={disp} />
          <Button title="Close" onPress={closemodal} />
        </View>
      </View>
    </Modal>
  );
}

let styles = StyleSheet.create({
  addgoal: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100%",
  },
  input: {
    borderColor: "silver",
    borderWidth: 1,
    width: "80%",
    height: 50,
    textAlign: "center",
  },
  buttonstyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    marginTop: 30,
  },
});
