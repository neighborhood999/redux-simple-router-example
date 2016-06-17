import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} children={routes} />
      </Provider>
    );
  }
}
