import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
//import FirstScreen from './screens/FirstScreen';
//import SecondScreen from './screens/SecondScreen';
import Login from './app/components/Login';
import Profile from './app/components/Profile'

const Application = StackNavigator({
    //First: {screen: FirstScreen},
    //Second: {screen: SecondScreen}
    Home: {screen: Login},
    Profile: {screen: Profile},
    }, { 
      navigationOptions: {
        header: false,
    }
});

class App extends React.Component {
  render(){
    return(
      <Application />
    );
  }
}
export default App;