import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';

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
    
    const colors = ['#00FFFF', '#41BEFC', '#6B49CE', '#BA45F8', '#323B4F'];

    return (
      <ResponsiveContainer id="eventGenreContainer" width="100%" height={400}>
        <PieChart width="50%" height="50%" id="eventGenre">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            stroke="#7f7f7f"
            dataKey='value'
            label={
              ({ percent }) => `${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend id="pieLegend" />
        </PieChart>
      </ResponsiveContainer>
    );
};

export default EventGenre;