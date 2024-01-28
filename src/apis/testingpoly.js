import { useEffect } from 'react';
import { getCurrentAndPreviousDate } from './dates';

const TestingPoly = ({ symbol }) => {
  const { currentDate, previousDate } = getCurrentAndPreviousDate();
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (symbol && apiKey) {
      fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/${currentDate}/${previousDate}?adjusted=true&sort=desc&limit=100&apiKey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Do something with the fetched data
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [symbol, apiKey, currentDate, previousDate]);

  return (
    <>
      {/* You can render components or UI elements here */}
    </>
  );
};

export default TestingPoly;

