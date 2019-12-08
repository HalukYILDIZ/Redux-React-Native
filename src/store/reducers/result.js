import * as ActionTypes from '../actions';

const initialState = {
  results: [],
};
const reducer = (state = initialState, action) => {
  //   if (action.type === 'INCREMENT') {
  //     return {counter: state.counter + action.val};
  //   }
  //   return state;
  switch (action.type) {
    case ActionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          // value: state.counter
          value: action.result,
        }),
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
