import {
  INCREMENT,
  DECREMENT
} from '../types/action-types';

export default function increment() {
  return {
   type: INCREMENT
  }
};

export const decrement = (state) => ({
  type: DECREMENT
});

export default function asyncIncrement() {
  return function(dispatch) {
   setTimeout( () => { dispatch(increment()) }, 1500 )
  }
}