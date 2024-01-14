import React from 'react';
import TextBoxExample from './search';
import Fetch from '../api'


export const Dashboard = () =>{
    return (
    <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen w-screen">
      <div className=" my-2 mx-5 col-span-10 row-span-2 bg-gray-200 border-solid border-2 border-gray-400">
        <div className='my-5'>
          <TextBoxExample />
        </div>
      </div>
      <div className="mu-3 ml-5 col-span-7 row-span-2 bg-gray-200 border-solid border-2 border-gray-400">
        Item 2
        <p>particualar paraameters of a stock in particular day</p>
      </div>
      <div className="mu-3 mr-5 col-span-3 row-span-7 bg-gray-200 border-solid border-2 border-gray-400 h-full w-full">
        <Fetch/>
      </div>
      <div className="mu-3 ml-5 col-span-7 row-span-5 bg-gray-200 border-solid border-2 border-gray-400">
        Item 4
        <p>chart data</p>
      </div>
    </div>
    );
};
