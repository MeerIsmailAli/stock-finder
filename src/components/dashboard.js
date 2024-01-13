import React from 'react';
import TextBoxExample from './search';


export const Dashboard = () =>{
    return (
    <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen w-screen">
      
      <div className=" my-2 mx-5 col-span-10 row-span-2 bg-blue-500">
        <div className='my-5'>
          <TextBoxExample />
        </div>
       
      </div>
      {/* Grid item 2 */}
      <div className="mu-3 ml-5 col-span-7 row-span-7 bg-green-500">
        Item 2
      </div>
      <div className="my-4 mr-5 col-span-3 row-span-7 bg-green-500">
        Item 2
      </div>
    </div>
    );
};
