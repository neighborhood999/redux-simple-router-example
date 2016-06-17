import { ADD_TODO, DELETE_TODO } from '../constants/todo';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    case DELETE_TODO :
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
}
