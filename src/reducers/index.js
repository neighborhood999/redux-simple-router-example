import { combineReducers } from 'redux';
import counter from './counter';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers(Object.assign({},
  { counter: counter },
  { routing: routeReducer },
));

export default rootReducer;
