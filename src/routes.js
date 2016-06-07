import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import * as containers from './containers';
import Home from './components/Home';

const {
  CounterPage,
  Search500Px,
  TodoPage,
} = containers;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/search500px" component={Search500Px} />
    <Route path="/todo" component={TodoPage} />
  </Route>
);
