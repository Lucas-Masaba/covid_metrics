import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import { BsArrowRightCircle as RightArrow } from 'react-icons/bs';
import { GiEarthAfricaEurope as Earth } from 'react-icons/gi';
import { GoLocation as Location } from 'react-icons/go';
import { fetchStats } from '../redux/countries/countries';
import { globalStats } from '../redux/global/global';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStats());
    dispatch(globalStats());
  }, []);

  const stats = useSelector((state) => state.countries);
  const total = useSelector((stateThree) => stateThree.global[6]);

  return (
    <div>
      <div className="total">
        <div>
          <span className="earth"><Earth /></span>
        </div>
        <div>
          <span className="world_sp">WORLD</span>
          <p className="total_p">{`${total} cases`}</p>
        </div>
      </div>

      <p className="stats_by">STATS BY COUNTRY</p>
      <ul className="country_ul">
        {stats.map((stat, index) => (
          <Link activeclassname="active link" key={stat.id} to={`/details/${stat.id}`}>
            <li key={stat.id} className={(index + 1) % 4 >= 2 ? 'country_li one' : 'country_li two'}>
              <div>
                <span className="location_icon"><Location /></span>
              </div>
              <div className="country_container">
                <div>
                  <p className="right_arrow"><RightArrow /></p>
                </div>
                <div>
                  <span className="name">{stat.name.toUpperCase()}</span>
                  <p className="today">{`${stat.today_confirmed}`}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Home;
