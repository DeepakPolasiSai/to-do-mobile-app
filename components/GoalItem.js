import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ item, deleteitem }) {
  return (
    <View style={styles.viewgolas}>
      <Pressable
        onPress={() => deleteitem(item.item.id)}
        android_ripple={{ color: "grey" }}
      >
        <Text style={styles.goals}>{item.item.value}</Text>
      </Pressable>
    </View>
  );
}

let styles = StyleSheet.create({
  goals: {
    color: "white",
    padding: 10,
  },
  viewgolas: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
});
