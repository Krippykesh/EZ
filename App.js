import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, SetenteredGoalText] = useState("");
  const [courseGoal, SetcourseGoal] = useState([]);
  function goalInputHandler(enteredText) {
    SetenteredGoalText(enteredText);
  }
  function addGoalHandler() {
    SetcourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.Appcontainer}>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Your Course Goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  InputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
});
