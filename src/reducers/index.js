import { combineReducers } from 'redux';
import counter from './counter';
import photos from './photos';
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  photos,
  routing: routeReducer
});

export default rootReducer;
