import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [titleInput, setTitleInput] = useState(
    props.edit ? props.edit.value : ""
  );
  const [categoryInput, setCategoryInput] = useState(
    props.edit ? props.edit.value : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(! titleInput || ! categoryInput) return;
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
            placeholder="Nome da tarefa"
            value={titleInput}
            onChange={handleChange}
            name="title"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Nome da tarefa"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            name="title"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Adicionar
          </button>
          <select className="todo-select"  style={{ marginTop: '20px' }} onChange={(e) => setCategoryInput(e.target.value)}>
            <option value=""> Selecione uma categoria</option>
            <option value="Trabaho"> Trabaho </option>
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
