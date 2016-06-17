/* eslint arrow-body-style: 0 */
import React, { Component, PropTypes } from 'react';
import { v4 } from 'node-uuid';
import { Link } from 'react-router';

export default class Counter extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  handleAddTodo(addTodo) {
    addTodo(this.refs.input.value);
    this.refs.input.value = '';
  }

  handleDelete(deleteTodo, index) {
    deleteTodo(index);
  }

  render() {
    const { todos, addTodo, deleteTodo } = this.props;

    return (
      <div className="container">
        <h3>Todo List</h3>
        <div className="form-group">
          <div className="input-group col-md-4">
            <span className="input-group-addon">Add Todo：</span>
            <input className="form-control" type="text" ref="input" />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={() => this.handleAddTodo(addTodo)}>
                Add
              </button>
            </span>
          </div>
        </div>
        <ul>
          {
            todos.map((text, index) => {
              return (
                <li key={v4()} onClick={() => this.handleDelete(deleteTodo, index)}>
                  {text}
                </li>
              );
            })
          }
        </ul>
        <p>
          <button className="btn btn-default">
            <Link to="/">Back Home</Link>
          </button>
        </p>
      </div>
    );
  }
}
