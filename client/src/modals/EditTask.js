import React, {useEffect, useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { updateTask } from "../requests/Task";
const EditTaskPopup = ({ modal, toggle, update, taskObj}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === "title"){
      setTitle(value);
    }
    else if(name === "description"){
      setDescription(value);
    }else if(name === "dueDate"){
      setDueDate(value);
    }
  }

  useEffect(() => {
    setTitle(taskObj.title);
    setDescription(taskObj.description);
    setDueDate(taskObj.dueDate);

  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["title"] = title;
    tempObj["description"] = description;
    tempObj["dueDate"] = dueDate;
    await updateTask(tempObj, taskObj.id);
    update(tempObj);
}

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Editar Tarefa</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Nome da Tarefa</label>
            <input type="text" className="form-control" value = {title} onChange={handleChange} name = "title"/>
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <textarea rows="5" className="form-control" value = {description} onChange={handleChange} name = "description"></textarea>
          </div>
          <div className="form-group">
            <label>Prazo de Conclusão</label>
            <input type="date" className="form-control" value = {dueDate} onChange={handleChange} name = "dueDate"/>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Salvar
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
