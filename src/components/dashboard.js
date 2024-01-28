import React, {useState} from 'react';
import Search from './search';
import MetaData from '../apis/meta_data'
import Chart from './chart';
import IntraDay from '../apis/intraday';
import  Info  from './info';


export const Dashboard = () =>{

  const gradientStyle = {
    background: 'linear-gradient(90deg, #54127a, #2c3e50)',
    backgroundSize: '200% 200%',
    animation: 'gradientAnimation 3s ease infinite', // Updated animation duration to 6s for the complete loop
  };
  

  const [symbol, setSymbol] = useState('');

  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
  };
    return (
    <div style={gradientStyle} className="grid grid-cols-2 grid-rows-9 gap-4 h-screen w-screen sm:grid-cols-10 sm:grid-rows-10">
      <div className="grid grid-cols-subgrid my-2 mx-5 col-span-2 row-span-2 bg-purple-200 border-solid border-2 border-gray-400 sm:col-span-10 sm:row-span-2 hover:shadow-2xl">
        <div className='my-5 col-span-2 row-span-1 sm:col-start-1 sm:row-span-2'>
          <Search onSymbolChange={handleSymbolChange}/>
        </div>
        <div className='my-5 col-span-2 row-span-1 border-solid border-2 sm:col-start-6 sm:row-span-2'>
          <Info/>
        </div>
      </div>
      <div className="mu-3 mx-5 col-span-2 row-span-2 bg-purple-200 border-solid border-2 border-gray-400 sm:col-span-7 sm:row-span-2 hover:shadow-2xl">
      <MetaData symbol={symbol}/>
      </div>
      <div className="mu-3 mx-5 col-span-2 row-span-2 bg-purple-200 border-solid border-2 border-gray-400 sm:col-span-3 sm:row-span-7 hover:shadow-2xl">
        <IntraDay symbol={symbol}/>
      </div>
      <div className="my-3 mx-5 col-span-2 row-span-3 bg-purple-200 border-solid border-2 border-gray-400 sm:col-span-7 sm:row-span-5 hover:shadow-2xl">
        <Chart symbol={symbol}/>
      </div>
    </div>
    );
};
