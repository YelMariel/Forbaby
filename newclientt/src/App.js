import React, { useState } from 'react';
import './App.css';

function App() {
   const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Are you Gwen Stefanie G. Dela Cruz?
          If yes, click the BUTTON!
        </p>
        <button
        className="App-button"
        onClick={handleButtonClick}
      >
        Learn hi
      </button>

      {showMessage && (
        <p>Can you be my valentine?</p>
      )}
      </header>
    </div>
  );
}

export default App;
