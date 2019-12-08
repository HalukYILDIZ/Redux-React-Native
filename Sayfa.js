import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {connect} from 'react-redux';

class Sayfa extends Component {
  render() {
    return (
      <View style={styles.viewSyle}>
        <Text>{this.props.durum}</Text>
        <Button
            title="denem"
          onPress={() => {
            this.props.degistir()
          }}><Text>deneme</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewSyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {durum: state.durum};
};
const mapDispatchToProps = dispatch => {
  return {
    degistir: () => dispatch({type: 'setDurum', payload: 963}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sayfa);
