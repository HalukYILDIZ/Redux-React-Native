import React from 'react';
import {Text, View} from 'react-native';

const counterOutput = props => (
  <View>
    <Text>Current Counter: {props.value}</Text>
  </View>
);

export default counterOutput;
