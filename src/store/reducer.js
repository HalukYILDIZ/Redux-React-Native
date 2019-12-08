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
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case 'SUBSTRACT':
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}),
      };
    case 'DELETE_RESULT':
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
