import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import config from '../../config';

const rootReducer = combineReducers({
  config,
  routing
});

export default rootReducer;
