import { fetchACountryFromAPI } from '../../APIs/covidAPIhandler';

// constants
const FETCH_A_STAT = 'statsStore/stats/FETCH_A_STAT';

// actions

export const fetchAStat = (countryId) => async (dispatch) => {
  const data = await fetchACountryFromAPI(countryId);
  const stats = [];
  const date = new Date();
  const recentDate = date.toISOString().split('T')[0];
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
    type: FETCH_A_STAT,
    payload: stats,

  });
};

// reducers
const initialStateTwo = [];

const statsReducerTwo = (stateTwo = initialStateTwo, action) => {
  switch (action.type) {
    case FETCH_A_STAT:
      return action.payload;
    default:
      return stateTwo;
  }
};

export default statsReducerTwo;
