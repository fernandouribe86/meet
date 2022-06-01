import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

export const EventGenre = ({events}) => {


    const [data, setData] = useState([]);
    useEffect(() => {
      const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
          const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
          return { name: genre, value };
        });
        return data;
      };
      const dt = getData().filter(x=>x.value!==0)
      setData(dt);
      // setData(() => getData());

    }, 
    [events]
    );
    
    const colors = ['#694966', '#F3C56F', '#F2F2EA', '#011627'];

    return (
      <ResponsiveContainer height={400} id="eventGenreContainer">
        <PieChart height={400} width={400} id="eventGenre">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            stroke="#3a788f"
            dataKey='value'
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
};

export default EventGenre;