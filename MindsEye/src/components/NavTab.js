import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

// Requires Two Props:
//      1. Object
//      2. Navigation

// Will need to update with click event
export class NavTab extends Component {
    
    render() {

        function libraryNav(navigation, callObj){
            console.log(callObj);
            navigation.navigate('Library', {
                nextObj: callObj
            });
        }

        return (
       //Physical Layout
            <View style={styles.full}>
                <TouchableOpacity style={styles.container} onPress={() => libraryNav(this.props.navigation, this.props.Obj)}
                accessible={true} accessibilityLabel={this.props.title} accessibilityHint={"Select Tab"}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    {/* <Text style={styles.author}>{this.props.author}</Text> */}
                    <Icon
                        accessible={true} accessibilityLabel={"Username Icon"}
                        style={{marginRight: 20}}
                        name='chevron-right'
                        size={24}
                        color='black'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: 100,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 1,
        borderWidth: 2,
        borderColor: "gray"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 20,
    },
    full: {
        width: "100%",
        height: 100
    }
  });
  