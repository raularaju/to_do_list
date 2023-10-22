import React from 'react';
import Modal from 'react-modal';
/* import "./DuplicateTaskModal.css"; */
const DuplicateTaskModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Success Modal"
      className="duplicateTask-modal"
    >
      <h2>Tarefa Duplicada</h2>
      <p>Uma tarefa com esse nome já existe</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default DuplicateTaskModal;
