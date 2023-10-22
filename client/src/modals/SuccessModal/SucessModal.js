import React from 'react';
import Modal from 'react-modal';
import successImage from '../../assets/banner.png'; 

const SuccessModal = ({ isOpen, closeModal, onClick }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Success Modal"
      className="success-modal"
    >
      <h2>Registro completo!</h2>
      <img src={successImage} alt="Success" /> 
      <p>Sua conta foi criada. Você pode fazer log in agora.</p>
      <button onClick={onClick}>Ir para Login</button>
    </Modal>
  );
};

export default SuccessModal;
