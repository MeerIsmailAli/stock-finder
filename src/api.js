  import { useState, useEffect } from 'react';


  const Fetch = () => {
    //const [stock, setStock] = useState({});
    const [metaData, setMetaData] = useState({});
    useEffect(() => {
      fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=demo')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setMetaData(data['Meta Data']);
        });
    }, []);

    return (
        <div>
          <h2>Meta Data</h2>
          {Object.keys(metaData).length > 0 && (
            <ul>
              {Object.entries(metaData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
  };

  export default Fetch;
