import { combineReducers } from 'redux';
import counter from './counter';
import photos from './photos';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers(Object.assign({},
  { counter: counter },
  { photos: photos},
  { routing: routeReducer },
));

export default rootReducer;
