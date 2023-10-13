import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreateTaskPopup = ({ modal, toggle, save}) => {
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

  const handleSave = () => {
    let taskObj = {};
    taskObj["title"] = title;
    taskObj["description"] = description;
    taskObj["dueDate"] = dueDate;
    save(taskObj);
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Criar Tarefa</ModalHeader>
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
        <Button color="primary" onClick={handleSave}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
