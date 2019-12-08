import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Sayfa from './Sayfa';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  durum: 'ilk değer',
};
const reducer = (state = initialState, action) => {
  if (action.type == 'setDurum') {
    return Object.assign({}, state, {
      durum: 'yenilenen değer' + action.payload,
    });
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Sayfa />
      </Provider>
    );
  }
}

export default App;
