import { combineReducers } from 'redux';
import counter from './counter';
import photos from './photos';
import todos from './todos';

import { routeReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  photos,
  routing,
  todos
});

export default rootReducer;
