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
      <input
        type="text"
        id="textbox"
        value={textInputValue}
        onChange={handleInputChange}
        placeholder="enter stock symbol"
      />
    </div>
  );
};

export default TextBoxExample;
