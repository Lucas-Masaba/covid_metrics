import { fetchCountriesFromAPI } from '../../APIs/covidAPIhandler';

// constants
const FETCH_STATS = 'statsStore/stats/FETCH_STATS';
const SEARCH_FILTER = 'statsStore/stats/SEARCH_FILTER';

// actions
export const fetchStats = () => async (dispatch) => {
  const data = await fetchCountriesFromAPI();
  const stats = [];
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const recentDate = yesterday.toISOString().split('T')[0];
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
      source: country.source,
    };
    stats.push(stat);
  });

  dispatch({
    type: FETCH_STATS,
    payload: stats,
  });
};

export const filterCountries = (payload) => ({
  type: SEARCH_FILTER,
  payload,
});

const initialState = [];

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATS:
      return action.payload;
    case SEARCH_FILTER:
      return state.filter((country) => {
        if (country.name === '') {
          return country;
        } if (country.name.toLowerCase().includes(action.payload.toLowerCase())) {
          return country;
        }
        return null;
      });
    default:
      return state;
  }
};

export default statsReducer;
