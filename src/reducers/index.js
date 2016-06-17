import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import photos from './photos';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  photos,
  todos,
  routing,
});

export default rootReducer;
