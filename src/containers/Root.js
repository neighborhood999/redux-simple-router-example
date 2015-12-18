import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from '../store/configureStore';
import routes from '../routes';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import createDevToolsWindow from '../utils/createDevToolsWindow';

const history = createHistory();
const store = configureStore();

createDevToolsWindow(store);

syncReduxAndRouter(history, store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Router history={history} children={routes} />
      </Provider>
    );
  }
}
