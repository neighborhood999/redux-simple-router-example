import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button className="btn btn-primary" onClick={increment}>+</button>
        {' '}
        <button className="btn btn-danger" onClick={decrement}>-</button>
        {' '}
        <button className="btn btn-success" onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button className="btn btn-warning" onClick={() => incrementAsync()}>Increment async</button>
        {' '}
        <button className="btn btn-default"><Link to="/">Back Home</Link></button>
      </p>
    );
  }
}
