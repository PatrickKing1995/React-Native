import React, { Component } from 'react';
import { Text, ActivityIndicator, View, Button } from 'react-native';

const util = require('util');

export default class FirstScreen extends Component {
    static navigationOptions = {
        title: 'FirstScreen',
      };
  render() {
      console.log("This: "+ util.inspect(this.props.navigation, false, null ));
      var {navigate}= this.props.navigation;
    return (
        <View style={{alignItems:'center'}}>
            <Text>This is Screen One</Text>
            <Button
                onPress={
                    ()=>navigate("Second", {name: 'Patrick', email: 'patrick@enclave.vn'})
                }
                title= "Go to Screen Two"
                style={{width: 200, height: 100}}
            />
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
  }
}
