import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const counterControl = props => (
  <TouchableOpacity title="CounterControl" onPress={props.clicked}>
    <Text> {props.label}</Text>
  </TouchableOpacity>
);

export default counterControl;
