import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
    >
      <div>
        <p>This is the modal content.</p>
        <button onClick={onRequestClose}>Close Modal</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
