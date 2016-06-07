import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/todo';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  };
}
export function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		id
	}
}
export function editTodo(id, text) {
	return {
		type: EDIT_TODO,
		id,
    text
	}
}
