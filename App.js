import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { TodoInput } from "./component/TodoInput";
import { useState } from "react";
import { TodoList } from "./component/TodoList";

export default () => {
  const [taskslist, setTaskslist] = useState([]);

  const handleAddTodo = (todo) => {
    setTaskslist([...taskslist, todo]);
  };

  // const handleDeleteTodo = (todo) => {
  //   setTaskslist(taskslist.filter((item) => todo.id !== item.id));
  // };

  const handleDeleteTodo = (todo) => {
    setTaskslist(
      taskslist.map((item) =>
        todo.id === item.id ? { ...item, isDone: true }: item
      )
    );
  };

  return (
    <ApplicationProvider
      {...eva}
      theme={eva.light}
      style={{
        position: "absolute",
        top: 40,
        right:0,
        left:0,
      }}
    >
      <Layout
        style={{
          right:0,
          left:0,
          marginHorizontal:20,
        }}
      >
        <TodoInput onTodoAdd={handleAddTodo} />
        <TodoList todos={taskslist} onDeleteTodo={handleDeleteTodo} />
      </Layout>
    </ApplicationProvider>
  );
};
