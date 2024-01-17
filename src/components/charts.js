import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FetchChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=demo')
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
        console.log(data);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      {chartData && chartData['Meta Data'] ? (
        <LineChart
          width={500}
          height={300}
          data={Object.entries(chartData['Time Series (Daily)'])
            .reverse()
            .slice(0, 100)
            .map(([date, values]) => ({ date, ...values }))} // Convert data to an array of objects with "date" property
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip labelFormatter={(value) => `Date: ${value}`} />
          <Legend />
          <Line type="monotone" dataKey="1. open" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="4. close" stroke="#82ca9d" />
        </LineChart>
      ) : (
        <p>Loading chart data...</p>
      )}
    </ResponsiveContainer>
  );
  
};

export default FetchChart;

