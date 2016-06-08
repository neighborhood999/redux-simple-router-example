import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Counter extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  handleAddTodo = () => {
    this.props.addTodo(this.refs.input.value);
    this.refs.input.value='';
  }
  handleDelete = (index) => {
    this.props.deleteTodo(index);
  }
  render() {
    const { todos } = this.props;
    console.log({todos})
    return (
      <div>

        <input type="text" ref="input" />
        <button onClick={this.handleAddTodo}>
          Add
        </button>
          {
            todos.map(
              (text, index) => <li key={index}>
              {text}
              <button onClick={() => this.handleDelete(index)}>刪除</button>
              </li> )
          }
        <p>
          <button className="btn btn-link"><Link to={`/`}>Back Home</Link></button>
        </p>
      </div>
    );
  }
}
