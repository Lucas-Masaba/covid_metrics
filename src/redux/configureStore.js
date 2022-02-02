import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countries from './countries/countries';
import country from './country/country';

const reducer = combineReducers({
  countries,
  country,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
