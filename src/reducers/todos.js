import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/todo';
import { OrderedMap, Record } from 'immutable'

const TodoRecord = Record({text: '', completed: false});
const initialState = OrderedMap({0: new TodoRecord({text: 'Redux Todo'})});

export default function todos(state=initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const id = state.reduce( (maxId, todo, id) => Math.max(id, maxId), 0 ) + 1;
      return state.set(
        id.toString(),
        new TodoRecord({text: action.text})
      );
    case DELETE_TODO :
			return state.delete(action.id);
    case EDIT_TODO :
  		return state.set(action.id, action.text);
  default:
    return state;
  }
}
