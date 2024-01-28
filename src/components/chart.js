import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCurrentAndPreviousDate } from '../apis/dates';

const Chart = ({ symbol }) => {
  const [chartData, setChartData] = useState(); //array of objects
  const { currentDate, previousDate } = getCurrentAndPreviousDate();

  useEffect(() => {
    // Use process.env.REACT_APP_API_KEY to access environment variable
    const apiKey = process.env.REACT_APP_API_KEY;

    if (symbol && apiKey) {
      fetch(`https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${previousDate}/${currentDate}?adjusted=true&sort=asc&limit=100&apiKey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setChartData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [symbol,currentDate,previousDate]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      {chartData ? (
        <LineChart
          width={500}
          height={300}
          data={chartData.results.map(entry => ({
            date: new Date(entry.t),
            open: entry.o,
            close: entry.c,
            high: entry.h,
            low: entry.l,
            volume: entry.v,
          }))}
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
          <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="close" stroke="#82ca9d" />
        </LineChart>
      ) : (
        <p>Loading chart data</p>
      )}
    </ResponsiveContainer>
  );
  
};

export default Chart;
