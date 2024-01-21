  import { useState, useEffect } from 'react';


  const Fetch = ({symbol}) => {

    const [metaData, setMetaData] = useState({});

    useEffect(() => {
      // Use process.env.REACT_APP_API_KEY to access environment variable
      const apiKey = process.env.REACT_APP_API_KEY;
  
      if (symbol && apiKey) {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMetaData(data['Meta Data']);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
    }, [symbol]);

    return (
        <div className='text-balance'>
          <h2>Meta Data</h2>
          {Object.keys(metaData).length > 0 && (
            <ul>
              {Object.entries(metaData).map(([key, value]) => (
                <li>
                  <strong>{value}</strong> 
                </li>
              ))}
            </ul>
          )}
        </div>
      );
  };

  export default Fetch;
