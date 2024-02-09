import React, { useState } from 'react';
import './App.css';

function App() {
   const [showMessage, setShowMessage] = useState(false);
   const [showMessage1, setShowMessage1] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };
   const handleButtonClick1 = () => {
    setShowMessage1(true);
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
         YES  I AM!
      </button>

      {showMessage && (
        <p>HI LOVE! seems simple yea? I am trying to get back on my track! Anyways! 
        </p>
      
      )}
    <button
        className="App-button"
        onClick={handleButtonClick1}
      >
         CLICKED HERE AGAIN!
      </button>

           {showMessage1 && (
        <p>
         Can you be my valentine?</p>
      
      )}
      </header>
    </div>
  );
}

export default App;
