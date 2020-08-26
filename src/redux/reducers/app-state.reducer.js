import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../../redux/actions/types/action-types.js'

export default function rootReducer(state, action) {
  
  if (action.type === INCREMENT) {
    return state + 1;
  }
  else if (action.type === DECREMENT) {
    return state - 1;
  }
  else if (action.type === ASYNC_INCREMENT) {
    return state + 1;
  }
  
  return state;
}