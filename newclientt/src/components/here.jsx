import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another component within the same window
    navigate('/new-page');
  };

  return (
    <div>
      <p>This is the New Component!</p>
      <button onClick={handleClick}>Go to New Page</button>
    </div>
  );
};

export default NewComponent;
