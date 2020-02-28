
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                <Button
                title="Enter"
                onPress={() => this.props.navigation.navigate('Browse')}
                />
            </View>
        );
    }
}