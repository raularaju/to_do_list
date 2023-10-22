import React from 'react';
import Modal from 'react-modal';
import successImage from '../assets/banner.png'; 

const SuccessModal = ({ isOpen, closeModal, redirectToLogin }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Success Modal"
      className="modal"
    >
      <h2>Account Created Successfully!</h2>
      <img src={successImage} alt="Success" /> 
      <p>Your account has been created. You can now log in.</p>
      <button onClick={redirectToLogin}>Go to Login</button>
    </Modal>
  );
};

export default SuccessModal;
