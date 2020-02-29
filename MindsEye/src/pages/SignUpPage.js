
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class SignUpPage extends Component {
    render() {   
        state = { 
            name: 'Sign Up'
        };
        onNameChange = (text) => {
            state.name = text;
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top', marginBottom:10 }}>
                <Text style={{fontSize:40, marginTop:50, marginBottom:20}}>{state.name}</Text>
                <Input 
                    inputStyle={{ 		
                    color: '#000',
                    fontSize: 25, 
                }} 
                containerStyle={{marginBottom:20}}
                placeholder="Username"
                leftIcon={
                    <Icon
                    style={{marginRight: 10}}
                    name='user'
                    size={24}
                    color='black'
                    />
                }
                onChangeText={onNameChange}
                />
                <Input 
                    inputStyle={{ 		
                    color: '#000',
                    fontSize: 25, 
                }} 
                containerStyle={{marginBottom:20}}
                placeholder="Password"
                leftIcon={
                    <Icon
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
                    <TouchableOpacity style={{width: 150, height: 75, alignItems: "center", justifyContent: "center", backgroundColor: "lightblue", borderColor: "gray", borderWidth: 0.5}} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{fontSize: 36, }}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 150, height: 75, alignItems: "center", justifyContent: "center", backgroundColor: "lightblue", borderColor: "gray", borderWidth: 0.5}} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={{fontSize: 36, }}>SignUp</Text>
                    </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{width: 150, marginTop: 20, height: 75, alignItems: "center", justifyContent: "center", backgroundColor: "lightblue", borderColor: "gray", borderWidth: 0.5}} onPress={() => this.props.navigation.navigate('Browse')}>
                        <Text style={{fontSize: 36, }}>Guest</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}