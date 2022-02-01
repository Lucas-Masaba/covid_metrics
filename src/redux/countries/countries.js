import { fetchCountriesFromAPI } from '../../APIs/covidAPIhandler';

// constants
const FETCH_STATS = 'statsStore/stats/FETCH_STATS';

// actions
export const fetchStats = () => async (dispatch) => {
  const data = await fetchCountriesFromAPI();
  const stats = [];
  const date = new Date();
  const recentDate = date.toISOString().split('T')[0];
  console.log(recentDate);
  const countriesObj = data.dates[recentDate].countries;
  const countries = Object.values(countriesObj);
  countries.forEach((country) => {
    const stat = {
      id: country.id,
      name: country.name,
      today_confirmed: country.today_confirmed,
      today_deaths: country.today_deaths,
      today_recovered: country.today_recovered,
      date: country.date,
    };
    stats.push(stat);
  });

  dispatch({
    type: FETCH_STATS,
    payload: stats,
  });
};

// reducers
const initialState = [];

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATS:
      return action.payload;
    default:
      return state;
  }
};

export default statsReducer;
