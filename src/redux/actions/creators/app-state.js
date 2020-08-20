import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT
} from '../types/action-types';

export const increment = (state) => ({
  type: INCREMENT
});

export const decrement = (state) => ({
  type: DECREMENT
});

export function asyncIncrement() {
  return function(dispatch) {
    dispatch({ type: ASYNC_INCREMENT })
  }
}