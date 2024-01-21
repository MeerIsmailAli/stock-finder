import React, { useState } from 'react';

const Search = ({onSymbolChange}) => {
  // State to manage the value of the text input
  const [symbol, setSymbol] = useState('');

  // Event handler for input changes
  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleButtonClick = () => {
    onSymbolChange(symbol);
  };

  return (
    <div className='text-balance'>
      <input className='border-solid border-2 border-indigo-600 mx-3 rounded'
        type="text"
        id="textbox"
        value={symbol}
        onChange={handleSymbolChange}
        placeholder="Enter symbol"
      />
      <button  onClick={handleButtonClick} className='border-solid border-2 border-indigo-600 rounded'>
        enter
      </button>
    </div>
  );
};

export default Search;
