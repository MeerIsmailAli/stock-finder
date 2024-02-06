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
    <div className='text-balance flex flex-col md:flex-row'>
  <input
    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    type="text"
    id="textbox"
    value={symbol}
    onChange={handleSymbolChange}
    placeholder="Enter symbol"
  />
  <button
    onClick={handleButtonClick}
    className='inline-flex items-center justify-center px-5 py-3 mt-2 md:mt-0 md:ml-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
  >
    Enter
  </button>
</div>

  );
};

export default Search;
