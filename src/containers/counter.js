import React, {Component} from 'react';
import {View, Button, Text, TouchableOpacity, FlatList} from 'react-native';

import {connect} from 'react-redux';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    return (
      <View>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <Button title="store result" onPress={this.props.onStoreResult} />
        <FlatList
          data={this.props.results}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.onDeleteResult(item.id)}>
              <Text>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {ctr: state.counter, results: state.results};
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT', val: 1}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT', val: 1}),
    onAddCounter: () => dispatch({type: 'ADD', val: 5}),
    onSubstractCounter: () => dispatch({type: 'SUBSTRACT', val: 5}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: id => dispatch({type: 'DELETE_RESULT', resultElId: id}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
