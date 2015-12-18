import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import * as containers from './containers';
import Home from './components/Home';

const {
  CounterPage,
} = containers;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
