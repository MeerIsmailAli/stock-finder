import React, { useState } from 'react';

const TextBoxExample = () => {
  // State to manage the value of the text input
  const [textInputValue, setTextInputValue] = useState('');

  // Event handler for input changes
  const handleInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  return (
    <div>
      <input className='border-solid border-2 border-indigo-600 mx-3 rounded'
        type="text"
        id="textbox"
        value={textInputValue}
        onChange={handleInputChange}
        placeholder="Enter symbol"
      />
      <button className='border-solid border-2 border-indigo-600 rounded'>
        enter
      </button>
    </div>
  );
};

export default TextBoxExample;
