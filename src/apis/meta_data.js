import { useState, useEffect } from 'react';

const MetaData = ({ symbol }) => {
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    // Use process.env.REACT_APP_API_KEY to access environment variable
    const apiKey = process.env.REACT_APP_API_KEY;

    if (symbol && apiKey) {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          // Check if "Meta Data" exists in the response
          if (data['Meta Data']) {
            setMetaData(data['Meta Data']);
          } else {
            setMetaData(null); // Set metaData to null if "Meta Data" is not present
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [symbol]);

  return (
    <div className='text-balance'>
      <></>
      {metaData ? (
        <ul>
          {Object.entries(metaData).map(([key, value]) => (
            <li key={key}>
              <strong>{value}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Meta Data available</p>
      )}
    </div>
  );
};

export default MetaData;

