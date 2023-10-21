import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [titleInput, setTitleInput] = useState(
    props.edit ? props.edit.title : ""
  );
  const [categoryInput, setCategoryInput] = useState(
    props.edit ? props.edit.category : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(props.edit);
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titleInput || !categoryInput) return;
    props.onSubmit({
      title: titleInput,
      category: categoryInput,
    });
    setTitleInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>

          <input  
            className="todo-input edit"
            placeholder="Nome da tarefa"
            value={titleInput}
            onChange={handleChange}
            name="title"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Update
          </button>
          <select
            className="todo-select edit"
            onChange={(e) => setCategoryInput(e.target.value)}
            value={categoryInput}
          >
            <option value="Trabalho"> Trabaho </option>
            <option value="Pessoal"> Pessoal </option>
            <option value="Casa"> Casa </option>
            <option value="Estudo"> Estudo </option>
            <option value="Outros"> Outros </option>
          </select>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            placeholder="Nome da tarefa"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            name="title"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Adicionar
          </button>
          <select
            className="todo-select"
            onChange={(e) => setCategoryInput(e.target.value)}
          >
            <option value=""> Selecione uma categoria</option>
            <option value="Trabalho"> Trabaho </option>
            <option value="Pessoal"> Pessoal </option>
            <option value="Casa"> Casa </option>
            <option value="Estudo"> Estudo </option>
            <option value="Outros"> Outros </option>
          </select>
        </>
      )}
    </form>
  );
}

export default TodoForm;
