import React, {Component} from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//import reducer from './src/store/reducer';
import counterReducer from './src/store/reducers/counter';
import resultReducer from './src/store/reducers/result';
import Counter from './src/containers/counter';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducer);
//const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(logger, thunk)),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
