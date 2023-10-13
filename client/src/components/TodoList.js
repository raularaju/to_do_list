import React, {useEffect, useState } from "react";
import CreateTask from "../modals/createTask";
import { createTask, getAllTasks } from "../requests/Task";

const TodoList = () => {
  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    createTask(taskObj.title, taskObj.description, taskObj.dueDate);
    setModal(false);
    setTaskList(tempList);
  };

  useEffect(() => {
    console.log("api url> ", process.env.REACT_APP_API_URL)
    getAllTasks()
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <>
      <div className="header text-center">
        <h3>Gerenciador de Tarefas</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Adicionar
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj) => (
          <li>{obj.title}</li>
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
