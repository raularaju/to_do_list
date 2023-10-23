import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import Filter from "../Filter/Filter";
import {
  deleteTask,
  updateTask,
  createTask,
  getAllTasksFromUser,
  markAllTasksAsComplete,
} from "../../requests/Task";
import Search from "../Search/Search";
import DuplicateTaskModal from "../../modals/DuplicateTaskModal/DuplicateTaskModal";
import { useParams } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // ["all", "completed", "uncompleted"
  const [filterCategory, setFilterCategory] = useState("all"); // ["all", "Trabalho", "Pessoal", "Casa", "Estudo", "Outros"]
  const [isCreatingTask, setIsCreatingTask] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isDuplicateTaskModalOpen, setDuplicateTaskModalOpen] = useState(false);
  const { UserId } = useParams();

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await getAllTasksFromUser(UserId);
        setTodos(response.data);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    }

    fetchTasks();
  }, [UserId]);

  const toggleCreateTaskMode = () => {
    setFilterCategory("all");
    setFilterStatus("all");
    setSearch("");
    setIsCreatingTask(!isCreatingTask);
  };

  const addTodo = async (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }
    const exists = todos.some((t) => {
      return todo.title === t.title;
    });
    if (exists) {
      setDuplicateTaskModalOpen(true);
      return;
    }
    try {
      const response = await createTask({
        title: todo.title,
        category: todo.category,
        UserId: UserId,
      });
      const newTodos = [{ ...todo, id: response.data.id }, ...todos];

      setTodos(newTodos);
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_BAD_REQUEST") {
        setDuplicateTaskModalOpen(true);
      }
    }
  };

  const updateTodo = async (todoId, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }
    try {
      const response = await updateTask(
        { title: newValue.title, category: newValue.category },
        todoId
      );

      newValue = { ...newValue, id: response.data.id };
      setTodos((prev) =>
        prev.map((item) => (item.id === todoId ? newValue : item))
      );
    } catch (error) {
      throw error;
    }
  };
  const removeTodo = async (e, id) => {
    e.preventDefault();
    try {
      await deleteTask(id);
      const removedArr = todos.filter((todo) => todo.id !== id);
      setTodos(removedArr);
    } catch (error) {
      throw error;
    }
  };

  const completeTodo = async (e, id) => {
    e.preventDefault();
    let updatedTodos = [...todos];
    for (let todo of updatedTodos) {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        await updateTask({ isComplete: todo.isComplete }, todo.id);
      }
    }
    setTodos(updatedTodos);
  };

  
  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };
  const completeAllTasks = async () => {
    const updatedTasks = todos.map((task) => ({
      ...task,
      isComplete: true,
    }));
    setTodos(updatedTasks);
    try {
      await markAllTasksAsComplete(UserId);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="todo-list">
      <div className="todo-list-container">
        <h1>Gerenciador de Tarefas</h1>
        {!isEditing && (
          <button onClick={toggleCreateTaskMode} className="toggle-button">
            {isCreatingTask ? "Pesquisar tarefas" : "Criar tarefas"}
          </button>
        )}

        {isEditing ? null : isCreatingTask ? (
          <>
            <TodoForm onSubmit={addTodo} />
            <button
              className="completeAllTasks-button"
              onClick={completeAllTasks}
            >
              Completar todas
            </button>
          </>
        ) : (
          <>
            <Search search={search} setSearch={setSearch} />
            <Filter
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
            />
          </>
        )}

        <Todo
          todos={todos
            .filter((todo) =>
              filterStatus === "all"
                ? true
                : filterStatus === "completed"
                ? todo.isComplete
                : !todo.isComplete
            )
            .filter((todo) =>
              filterCategory === "all" ? true : todo.category === filterCategory
            )
            .filter((todo) =>
              todo.title.toLowerCase().includes(search.toLowerCase())
            )}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          startEditing={startEditing}
          stopEditing={stopEditing}
        />
        <DuplicateTaskModal
          isOpen={isDuplicateTaskModalOpen}
          closeModal={() => setDuplicateTaskModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default TodoList;
