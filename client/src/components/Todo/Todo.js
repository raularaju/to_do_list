import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    title: "",
    category: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      title: "",
      category: "",
    });
  };

  if (edit.id) {
    console.log("vrau");
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="content" key={todo.id} onClick={() => completeTodo(todo.id)}>
        <div className="content-left">
        <p> {todo.title} </p>
        <p> ({todo.category}) </p>
        </div>
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, title: todo.title, category: todo.category })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
