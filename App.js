import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/store/reducer';
import Counter from './src/containers/counter';

const store = createStore(reducer);

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
