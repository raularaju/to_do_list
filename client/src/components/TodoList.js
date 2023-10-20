import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {
  deleteTask,
  updateTask,
  createTask,
  getAllTasks,
} from "../requests/Task";
import Search from "./Search";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [isCreatingTask, setIsCreatingTask] = useState(true);
  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await getAllTasks(); // Assuming getAllTasks returns a list of tasks
        setTodos(response.data); // Assuming the tasks are stored in response.data
      } catch (error) {
        // Handle any errors here
        console.error("Error loading tasks:", error);
      }
    }

    fetchTasks(); // Call the async function
  }, []);

  const toggleCreateTaskMode = () => {
    setIsCreatingTask(!isCreatingTask);
  };

  const addTodo = async (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }
    const response = await createTask({
      title: todo.title,
      category: todo.category,
    });

    const newTodos = [{ ...todo, id: response.data.id }, ...todos];

    setTodos(newTodos);
    console.log("add ", todos);
  };

  const updateTodo = async (todoId, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }
    const response = await updateTask({ title: newValue.title }, todoId);
    newValue = { ...newValue, id: response.data.id };
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = async (id) => {
    console.log("removeTodo", id);
    await deleteTask(id);
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = async (id) => {
    let updatedTodos = [...todos];
    for (let todo of updatedTodos) {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        await updateTask({ isComplete: todo.isComplete }, todo.id);
      }
    }
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <button onClick={toggleCreateTaskMode} className="toggle-button">
        {isCreatingTask ? "Pesquisar tarefas" : "Criar tarefas"}
      </button>

      {isCreatingTask ? (
        <TodoForm onSubmit={addTodo} />
      ) : (
        <Search search={search} setSearch={setSearch} />
      )}

      <Todo
        todos={todos.filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
