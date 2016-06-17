/* eslint global-require: 0 */
import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import './stylesheets/style.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV === 'development') {
  const createDevToolsWindow = require('./utils/createDevToolsWindow').default;
  createDevToolsWindow(store);
}

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
