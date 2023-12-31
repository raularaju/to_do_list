import React from 'react';
import Modal from 'react-modal';
import './SuccessModal.css';
const SuccessModal = ({ isOpen, closeModal, onClick }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Success Modal"
      className="success-modal"
    >
      <h2>Registro completo!</h2>
      <p>Sua conta foi criada. Você pode fazer log in agora.</p>
      <button onClick={onClick}>Ir para Login</button>
    </Modal>
  );
};

export default SuccessModal;
