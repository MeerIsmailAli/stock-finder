import React, {useState} from 'react';
import Search from './search';
import Chart from './chart';
import IntraDay from '../apis/intraday';



export const Dashboard = () =>{
  const [symbol, setSymbol] = useState('');

  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
  };
    return (
  <section className="bg-white dark:bg-gray-900 grid grid-cols-1 grid-rows-7 sm:grid-cols-4 sm:grid-rows-8 mx-8">
    <div className="mx-4 my-8 place-self-center col-span-1 row-span-2 sm:col-span-2 sm:row-span-2">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Stock Analyzer Tool</h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Returns past 4 months recorded Aggregate Bars of a given stock featuring the corresponding open and close values for that particular day.</p>
      <div>
        <Search onSymbolChange={handleSymbolChange} />
      </div>
    </div>
    <div className="mx-4 my-8 border-solid border-2 border-gray-200 rounded col-span-1 row-span-2 sm:col-span-2 sm:row-span-2">
      <IntraDay symbol={symbol}/>
    </div>
    <div className="mx-4 my-4 col-span-1 row-span-3 sm:col-span-4 sm:row-span-4">
    <Chart symbol={symbol}/>
    </div>
  </section>
    );
};
