import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAStat } from '../redux/countries/countries';

const Details = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAStat(countryId));
  }, []);

  const stats = useSelector((stateTwo) => stateTwo.countries[0]);

  return (
    <div>
      <p>{stats.today_deaths}</p>
    </div>
  );
};
export default Details;
