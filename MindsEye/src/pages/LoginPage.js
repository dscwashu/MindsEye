
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class LoginPage extends Component {
    render() {   
        state = { 
            name: 'Login'
        };

        onNameChange = (text) => {
            state.name = text;
        }

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top', marginBottom:10 }}>
                <Text style={{fontSize:40, marginTop:50, marginBottom:20}}>{state.name}</Text>
                <Input accessible={true} accessibilityLabel={"Username"} accessibilityHint={"Enter your Username"}
                    inputStyle={{ 		
                    color: '#000',
                    fontSize: 25, 
                }} 
                containerStyle={{marginBottom:20}}
                placeholder="Username"
                leftIcon={
                    <Icon
                    accessible={true} accessibilityLabel={"Username Icon"}
                    style={{marginRight: 10}}
                    name='user'
                    size={24}
                    color='black'
                    />
                }
                onChangeText={onNameChange}
                />
                <Input accessible={true} accessibilityLabel={"Password"} accessibilityHint={"Enter your Password"}
                    inputStyle={{ 		
                    color: '#000',
                    fontSize: 25, 
                }} 
                containerStyle={{marginBottom:20}}
                placeholder="Password"
                leftIcon={
                    <Icon
                    accessible={true} accessibilityLabel={"Password Icon"}
                    style={{marginRight: 10}}
                    name='lock'
                    size={24}
                    color='black'
                    />
                }
                onChangeText={onNameChange}
                secureTextEntry={true}
                />
                <View style={{flexDirection: "row", justifyContent: "space-around", width: "80%", height: 75}}>
                    <TouchableOpacity style={{width: 300, height: 75, alignItems: "center", justifyContent: "center", backgroundColor: "lightblue", borderColor: "gray", borderWidth: 0.5}} onPress={() => this.props.navigation.navigate('Browse')}
                    accessible={true} accessibilityLabel={"Log In Button"} accessibilityHint={"Click to Login"}>
                        <Text style={{fontSize: 36, }}>Log In</Text>
                    </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={{width: 300, height: 75, alignItems: "center", justifyContent: "center", backgroundColor: "lightblue", borderColor: "gray", borderWidth: 0.5, marginTop: 20}} onPress={() => this.props.navigation.navigate('SignUp')}
                        accessible={true} accessibilityLabel={"Sign-up Instead"} accessibilityHint={"Click to Navigate to Signup"}>
                        <Text style={{fontSize: 36, }}>SignUp</Text>
                    </TouchableOpacity>
                    
                    {/* <TouchableOpacity style={{width: 150, marginTop: 20, height: 75, alignItems: "center", justifyContent: "center", backgroundColor: "lightblue", borderColor: "gray", borderWidth: 0.5}} onPress={() => this.props.navigation.navigate('Browse')}
                        accessible={true} accessibilityLabel={"Guest"} accessibilityHint={"Click to Login as Guest"}>
                        <Text style={{fontSize: 36, }}>Guest</Text>
                    </TouchableOpacity> */}
            </View>
        );
    }
}