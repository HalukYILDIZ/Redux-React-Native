import React, {Component} from 'react';
import {View, Button, Text, TouchableOpacity, FlatList} from 'react-native';

import {connect} from 'react-redux';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';
import * as actionCreators from '../store/actions/index';

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
        {/* <Button title="store result" onPress={this.props.onStoreResult} /> */}
        <Button
          title="store result"
          onPress={() => this.props.onStoreResult(this.props.ctr)}
        />
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
  //return {ctr: state.counter, results: state.results};
  return {ctr: state.ctr.counter, results: state.res.results};
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment(1)),
    onDecrementCounter: () => dispatch(actionCreators.decrement(1)),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubstractCounter: () => dispatch(actionCreators.subtract(5)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id)),
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
