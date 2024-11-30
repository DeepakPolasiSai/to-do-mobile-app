import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  let [newval, setnewval] = useState("");
  let [modalstate, setmodalstate] = useState(false);
  let [newgoal, setnewgoal] = useState([]);
  function enteredval() {
    setnewgoal((prev) => {
      let a = [
        ...prev,
        { id: `${Date.now()}-${Math.random().toString(36)}`, value: newval },
      ];
      return a;
    });
    setnewval("");
    setmodalstate(false);
  }
  function clickitemdel(id) {
    setnewgoal((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }
  function modalopen() {
    setmodalstate(true);
  }
  function modalclose() {
    setmodalstate(false);
  }
  return (
    <View style={styles.container}>
      <Button title="Add your Goal" onPress={modalopen} />
      <GoalInput
        val={newval}
        change={setnewval}
        disp={enteredval}
        displaymodal={modalstate}
        closemodal={modalclose}
      ></GoalInput>
      <FlatList
        style={styles.goallist}
        data={newgoal}
        renderItem={(item) => {
          return <GoalItem item={item} deleteitem={clickitemdel} />;
        }}
        keyExtractor={(item, index) => {
          // console.log("item: ", item);
          // console.log("index: ", index);
          return item.id;
        }}
      />
      {/* <ScrollView style={styles.goallist}>
        {newgoal.map((item) => (
          <Text key={item.id} style={styles.goals}>
            {item.value}
          </Text>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  goallist: {
    borderTopWidth: 0.2,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
