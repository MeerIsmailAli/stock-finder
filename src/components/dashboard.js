import React from 'react';
import TextBoxExample from './search';
import Fetch from '../apis/meta_data'
import Example from './charts';


export const Dashboard = () =>{
    return (
    <div className="grid grid-cols-2 grid-rows-9 gap-4 h-screen w-screen sm:grid-cols-10 sm:grid-rows-10">
      <div className=" my-2 mx-5 col-span-2 row-span-1 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-10 sm:row-span-2">
        <div className='my-5'>
          <TextBoxExample />
        </div>
      </div>
      <div className="mu-3 mx-5 col-span-2 row-span-2 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-7 sm:row-span-2">
        Item 2
        <p>particualar paraameters of a stock in particular day</p>
      </div>
      <div className="mu-3 mx-5 col-span-2 row-span-2 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-3 sm:row-span-7">
        <Fetch/>
      </div>
      <div className="mu-3 mx-5 col-span-2 row-span-3 bg-gray-200 border-solid border-2 border-gray-400 sm:col-span-7 sm:row-span-5">
        <Example/>
      </div>
    </div>
    );
};
