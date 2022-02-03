import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { GoLocation as Location } from 'react-icons/go';
import { BsArrowRightCircle as RightArrow } from 'react-icons/bs';
import { fetchAStat } from '../redux/country/country';
import './home.css';
import './details.css';

const Details = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAStat(countryId));
  }, []);

  const stats = useSelector((stateTwo) => stateTwo.country[0]);

  return (
    <div>
      <div className="total">
        <div>
          <span className="earth"><Location /></span>
        </div>
        <div>
          <span className="world_sp">{stats.name}</span>
          <p className="total_p">{`${stats.today_confirmed} cases`}</p>
        </div>
      </div>
      <p className="stats_by">{`STATS BREAKDOWN FOR ${stats.date}`}</p>
      <ul className="additional_ul">
        <li className="additional_li one">
          <div>
            <span className="data">Confirmed</span>
          </div>
          <div className="data_container">
            <span className="confirmed_data">{`${stats.today_confirmed} cases`}</span>
            {' '}
            <span><RightArrow /></span>
          </div>
        </li>
        <li className="additional_li two">
          <div>
            <span className="data">Recovered</span>
          </div>
          <div className="data_container">
            <span className="confirmed_data">{`${stats.today_recovered} cases`}</span>
            {' '}
            <span><RightArrow /></span>
          </div>
        </li>
        <li className="additional_li one">
          <div>
            <span className="data">Deaths</span>
          </div>
          <div className="data_container">
            <span className="confirmed_data">{`${stats.today_deaths} cases`}</span>
            {' '}
            <span><RightArrow /></span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Details;
