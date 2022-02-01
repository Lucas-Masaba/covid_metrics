import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const stats = useSelector((state) => state.countries);

  return (
    <div>
      <ul>
        {stats.map((stat) => (
          <li key={stat.id}>
            <p>{stat.date}</p>
            <p>{stat.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
