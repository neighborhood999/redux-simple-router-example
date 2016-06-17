import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import * as Actions from '../actions/todo';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
