import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [titleInput, setTitleInput] = useState(
    props.edit ? props.edit.title : ""
  );
  const [categoryInput, setCategoryInput] = useState(
    props.edit ? props.edit.category : ""
  );
  const [titleError, setTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 36) {
      setTitleInput(value);
      setTitleError("");
    } else {
      setTitleError("Nome muito grande.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!titleInput){
      setTitleError("Coloque o nome da tarefa")
    }
    if(!categoryInput){
      setCategoryError("Selecione uma categoria")
    }
    if(!titleInput || !categoryInput){
      return
    }
    props.onSubmit({
      title: titleInput,
      category: categoryInput,
    });
    setTitleInput("");
    setTitleError("");
    setCategoryError("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          {titleError && <p className="title error-message">{titleError}</p>}
          <input
            className={`todo-input edit ${titleError ? "titleError" : ""}`}
            placeholder="Nome da tarefa"
            value={titleInput}
            onChange={handleChange}
            name="title"
            ref={inputRef}
            required
          />
          <button onClick={handleSubmit} className="todo-button" disabled={titleError === "Nome muito grande."}>
            Atualizar
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
          {titleError && <p className="title error-message">{titleError}</p>}
          <input
            className={`todo-input ${titleError ? "titleError" : ""}`}
            placeholder="Nome da tarefa"
            value={titleInput}
            onChange={handleChange}
            name="title"
            ref={inputRef}
            required
          />
          <button onClick={handleSubmit} className="todo-button" disabled={titleError === "Nome muito grande."}>
            Adicionar
          </button>
          {categoryError && <p className="category error-message">{categoryError}</p>}
          <select
            className="todo-select"
            onChange={(e) => setCategoryInput(e.target.value)}
            required
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
