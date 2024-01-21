import { useState, useEffect } from 'react';
import Search from '../components/search';

const Day = ({ symbol }) => {
  const [dayData, setDayData] = useState({});

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDayData(data['Time Series (5min)'] ? Object.values(data['Time Series (5min)'])[0] : {});
      });
  }, [symbol]);


  return (
    <div className='text-balance w-full h-full'>
      {Object.keys(dayData).length > 0 && (
        <ul className='w-full h-full grid grid-cols-1 gap-4'>
          {Object.entries(dayData).map(([key, value]) => (
            <li key={key} className='grid grid-cols-2 items-center py-2'>
              <strong>{key}:</strong> {value}
              <div className='col-span-2 h-0.5 bg-gray-400'></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Day;
