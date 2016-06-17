import { INCREMENT_COUNTER, DESCREMENT_COUNTER } from '../constants/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DESCREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
