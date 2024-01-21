import React, {useState} from 'react';
import Search from './search';
import Fetch from '../apis/meta_data'
import FetchChart from './charts';
import Day from '../apis/intraday'


export const Dashboard = () =>{

  const gradientStyle = {
    background: 'linear-gradient(90deg, #54127a, #2c3e50)',
    backgroundSize: '200% 200%',
    animation: 'gradientAnimation 6s ease infinite', // Updated animation duration to 6s for the complete loop
  };
  

  const [symbol, setSymbol] = useState('');

  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
  };
    return (
    <div style={gradientStyle} className="grid grid-cols-2 grid-rows-8 gap-4 h-screen w-screen sm:grid-cols-10 sm:grid-rows-10">
      <div className=" my-2 mx-5 col-span-2 row-span-1 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-10 sm:row-span-2 hover:shadow-2xl">1
        <div className='my-5'>
          <Search onSymbolChange={handleSymbolChange}/>
        </div>
      </div>
      <div className="mu-3 mx-5 col-span-2 row-span-2 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-7 sm:row-span-2 hover:shadow-2xl">2
      <Fetch symbol={symbol}/>
      </div>
      <div className="mu-3 mx-5 col-span-2 row-span-2 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-3 sm:row-span-7 hover:shadow-2xl">3
        <Day symbol={symbol}/>
      </div>
      <div className="my-3 mx-5 col-span-2 row-span-3 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-7 sm:row-span-5 hover:shadow-2xl">4
        <FetchChart symbol={symbol}/>
      </div>
    </div>
    );
};
