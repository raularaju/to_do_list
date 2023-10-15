import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { deleteTask, updateTask } from "../requests/Task";
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = async (id) => {
    await deleteTask(id);
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = async (id) => {
    let updatedTodos = todos.map(async (todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        console.log(id);
        await updateTask({ status: "feito" }, id);
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
