import React, { useState, useEffect, useRef } from 'react';
import { createTask } from '../requests/Task';

function TodoForm(props) {
  const [titleInput, setTitleInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setTitleInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onSubmit({
      title: titleInput,
    });
    setTitleInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={titleInput}
            onChange={handleChange}
            name='title'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={titleInput}
            onChange={handleChange}
            name='title'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;