import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
//import reducer from './src/store/reducer';
import counterReducer from './src/store/reducers/counter';
import resultReducer from './src/store/reducers/result';
import Counter from './src/containers/counter';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
//const store = createStore(reducer);
const store = createStore(rootReducer);

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
