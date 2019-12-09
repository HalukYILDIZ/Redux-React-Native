import * as ActionTypes from './actions/actions';

const initialState = {
  counter: 0,
  results: [],
};
const reducer = (state = initialState, action) => {
  //   if (action.type === 'INCREMENT') {
  //     return {counter: state.counter + action.val};
  //   }
  //   return state;
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.val,
      };
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
    case ActionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}),
      };
    case ActionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId,
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

export default reducer;
