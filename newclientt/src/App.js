import React, { useState } from 'react';
import ModalComponent from '../components/modal'; // Update the path accordingly

const MyComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
    // You can add additional logic here if needed
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <p>Are you Gwenny?</p>

      <button
        className="App-link"
        onClick={handleButtonClick}
      >
        If yes, CLICK HERE
      </button>

      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </div>
  );
};

export default MyComponent;
