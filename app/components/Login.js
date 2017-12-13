import React from 'react';
import { 
    StyleSheet, 
    Text,
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity , 
    AsyncStorage,
    Image,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '', password: '',        
        }
    }


    componentDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async ()=> {
        var value = await AsyncStorage.getItem('user');
        if(value !== null ){
            this.props.navigation.navigate('Profile');
        }
    }

    render(){
        var {navigate} = this.props.navigation;
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View style={styles.container}>

                    <Image style={styles.imagelogin} source={require('./beelogo.png')}/>

                    <TextInput style={styles.textInput} 
                        placeholder='Username'
                        onChangeText={(username)=>this.setState({username})}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Password'
                        onChangeText={(password)=>this.setState({password})}
                        underlineColorAndroid='transparent'
                    />
                    
                    <TouchableOpacity 
                        style={styles.buttonLogin}
                        onPress={
                            ()=> navigate('Profile', { name: this.state.username })
                            }>
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity >

                    <Text style={styles.textRegular}> Not a member? <Text style={styles.textRegister}>Sign up now.</Text></Text>
                </View>
                    

            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC125',  
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
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
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagelogin: {
        width: 250,
        height: 150,
        backgroundColor: 'transparent',
    },
    textRegister: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#1C1C1C',
    },
    textRegular: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
    }
});

export default Login;