import { useState, useEffect } from 'react';

const IntraDay = ({ symbol }) => {
  const [dayData, setDayData] = useState({});

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setDayData(data['Time Series (5min)'] ? Object.values(data['Time Series (5min)'])[0] : {});
      });
  }, [symbol]);


  return (
    <div className='text-balance w-full h-full overflow-y-auto min-w-0 my-8 mx-8'>
      {Object.keys(dayData).length > 0 && (
        <dl className='max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700'>
          {Object.entries(dayData).map(([key, value]) => (
            <div key={key} className='flex flex-col py-3'>
              <dt className='mb-1 text-gray-500 md:text-lg dark:text-gray-400'>{key}  :  {value}</dt>
            </div>
          ))}
        </dl>
      )}
    </div>
  );  
};

export default IntraDay;
