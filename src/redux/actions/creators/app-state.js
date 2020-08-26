import {
  INCREMENT,
  DECREMENT
} from '../types/action-types';

export function increment() {
  return {
   type: INCREMENT
  }
};

export function asyncIncrement() {
  return function(dispatch) {
   setTimeout( () => { dispatch(increment()); console.log('ok!')}, 1500 )
  }
}