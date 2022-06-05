import {
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CheckBox, Layout, Tab, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import * as evaProps from "@eva-design/eva";
import { AlertPrompt } from "react-native-alert-prompt";

export const TodoList = ({ todos, onDeleteTodo }) => {
  function onPressTodo() {
    console.log("P");
    <Prompt
      title="Say Something"
      placeholder="Type Something"
      onCancel={() =>
        this.setState({
          text: "User Cancelled!",
          visible: !this.state.visible,
        })
      }
      onSubmit={(text) =>
        this.setState({
          text: "User submitted: " + text,
          visible: !this.state.visible,
        })
      }
    />;
  }
  return (
    <FlatList
      style={styles.listContainer}
      data={todos}
      renderItem={({ item }) => {
        return (
          <Layout
            style={[
              styles.itemContainer,
              { backgroundColor: item.isDone ? "#e7cbd6" : "#cbe7ce" },
            ]}
          >
            <TouchableOpacity onPress={() => onPressTodo}>
              <CheckBox
                checked={item.isDone}
                onChange={() => onDeleteTodo(item)}
                disabled={item.isDone}
                // Active
              >
                <Tab
                  title={(evaProps) => (
                    <Text
                      {...evaProps}
                      status="control"
                      style={{ fontSize: 20 ,textDecorationLine: item.isDone ?  "line-through" :"",fontWeight: 'bold'}}
                    >
                      {item.title}
                    </Text>
                  )}
                  onPress={() => console.log("z")}
                />
              </CheckBox>
            </TouchableOpacity>
          </Layout>
        );
      }}
      keyExtractor={(item, index) => `${item.id}${index}`}
      ItemSeparatorComponent={() => (
        <View
          style={{
            margin: 10,
          }}
        ></View>
      )}
      ListEmptyComponent={() => <Text>please add todo!</Text>}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 5,
    padding: 2,
  },
  itemContainer: {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
});
