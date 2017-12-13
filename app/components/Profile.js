import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
    AsyncStorage,
    Image, } from 'react-native';

import { StackNavigator } from 'react-navigation';


class Profile extends React.Component {
  render(){
      var params = this.props.navigation.state.params;
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        
            <View style={styles.container}>
        
            <Text style={styles.textLogin}>WELCOME, {params.name}</Text>
        
            </View>
        
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,    
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#FFFFFF',
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight:'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 14,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    buttonLogin: {
        alignSelf: 'stretch',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#363636',
    },
    textLogin: {
        color: '#FFB90F',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagelogin: {
        width: 250,
        height: 150,
        backgroundColor: 'transparent',
    }
});

export default Profile;