import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

const util = require('util');

export default class SecondScreen extends Component {
    static navigationOptions = {
        title: 'SecondScreen',
      };
  render() {
      var {params}=this.props.navigation.state;
    return (
        <View>
            <Text>This is Screen Two</Text>
            <Text>Name: {params.name}</Text>
            <Text>Email: {params.email}</Text>
        </View>
    )
  }
}
