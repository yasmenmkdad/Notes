import { TextInput, View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Layout, Button } from "@ui-kitten/components";

let counter = 1;

export const TodoInput = ({ onTodoAdd }) => {
  const [title, setTitle] = useState("");
  const handleAddTodo = () => {
    let todo = {
      id: counter++,
      title,
      isDone: false,
    };
    onTodoAdd(todo);
    setTitle("");
  };
  return (
    <View style={[styles.container, { marginTop: 10 }]}>
      <TextInput
        style={{ marginTop: 5, marginRight: 5 }}
        value={title}
        onChangeText={(text) => setTitle(text)}
        width="65%"
        placeholder="enter todo ..."
        status={title.length < 3 ? "danger" : "primary"}
      />
      <Layout>
        <Button
          onPress={handleAddTodo}
          disabled={title.length < 3 ? true : false}
          status="info"
          // appearance='ghost'
          appearance="outline"
        >
          Add
        </Button>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 25,
    justifyContent: "space-between",
  },
});
