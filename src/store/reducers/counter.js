import * as ActionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  //   if (action.type === 'INCREMENT') {
  //     return {counter: state.counter + action.val};
  //   }
  //   return state;
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return updateObject(state, {counter: state.counter + action.val});
    // diğer yaklaşımdan farkı kod tekrarını azaltır,utility de bulunan fonksiyonu diğer tüm fonksiyonları kısaltmak için bu şekilde kullanabiliriz.
    // return {
    //   ...state,
    //   counter: state.counter + action.val,
    // };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case ActionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case ActionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
  }
  return state;
};

export default reducer;
