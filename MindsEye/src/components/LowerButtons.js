import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

 // Requires Two Props:
 //      1. Title- what tab it will go to
 //      2. which element will be hidden

//style={styles.container}
 // Will need to update with click event

 export class LowButtons extends Component {
     render() {
         return (
             <View style={styles.container}>
                 <TouchableOpacity onPress={this.props.livestreamOnPress} style={styles.title}>
                    <Text style={styles.text}>Browse</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.browseOnPress} style={styles.title}>
                    <Text style={styles.text}>Radio</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.searchOnPress} style={styles.title}>
                    <Text style={styles.text}>Play</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.libraryOnPress} style={styles.title}>
                    <Text style={styles.text}>Library</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.settingsOnPress} style={styles.title}>
                    <Text style={styles.text}>Settings</Text>
                 </TouchableOpacity>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container: {
        height: 75,
        flexDirection: "row",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
     },
     title: {
         height: 75,
        fontSize: 20,
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
     },
     text: {
         fontSize: 20,
     }
});