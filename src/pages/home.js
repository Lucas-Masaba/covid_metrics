import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import { BsArrowRightCircle as RightArrow } from 'react-icons/bs';
import { fetchStats } from '../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStats());
  }, []);

  const stats = useSelector((state) => state.countries);
  return (
    <div>
      <ul className="country_ul">
        {stats.map((stat) => (
          <Link key={stat.id} to={`/details/${stat.id}`}>
            <li className="country_li">
              <button type="button" className="details_button" aria-label="details"><RightArrow /></button>
              <p>{stat.name}</p>
              <p>{`${stat.today_confirmed} cases`}</p>
              <p>{stat.total}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Home;
