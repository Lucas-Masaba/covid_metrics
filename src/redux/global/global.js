import { fetchCountriesFromAPI } from '../../APIs/covidAPIhandler';

// constants
const GLOBAL = 'statsStore/stats/GLOBAL';

// actions
export const globalStats = () => async (dispatch) => {
  const data = await fetchCountriesFromAPI();
  // const { total } = data;
  const totalArray = Object.values(data.total);
  // const array = Array.from(data);
  dispatch({
    type: GLOBAL,
    payload: totalArray,
  });
};

// reducers
const initialStateThree = [];

const statsReducerThree = (stateThree = initialStateThree, action) => {
  switch (action.type) {
    case GLOBAL:
      return action.payload;
    default:
      return stateThree;
  }
};

export default statsReducerThree;
