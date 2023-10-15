import React, {useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import { createTask, getAllTasks, deleteTask } from "../requests/Task";
import Card from "./Card";
const TodoList = () => {
  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = async (taskObj) => {
    let tempList = taskList;
    const response = await createTask(taskObj);
    tempList.push({...taskObj, id: response.data.id});
    setModal(false);
    setTaskList(tempList);
  };

  useEffect(() => {
    getAllTasks()
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleDeleteTask = async (index) => {
    let tempList = taskList;
    const taskId = tempList[index].id;
    tempList.splice(index, 1);
    await deleteTask(taskId)
    setTaskList(tempList);
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    setTaskList(tempList);
    window.location.reload()
  }

  return (
    <>
      <div className="header text-center">
        <h3>Gerenciador de Tarefas</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Adicionar
        </button>
      </div>
      <div className="task-container">
        {taskList && taskList.map((obj, index) => 
          
          <Card taskObj={obj} index={index} handleDeleteTask = {handleDeleteTask} updateListArray={updateListArray}/>
        )}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
