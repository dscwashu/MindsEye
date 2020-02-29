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
                 <TouchableOpacity onPress={this.props.livestreamOnPress} style={styles.title}
                  accessible={true} accessibilityLabel={"Browse"} accessibilityHint={"Navigate to Browse"}>
                    <Text style={styles.text}>Browse</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.browseOnPress} style={styles.title}
                  accessible={true} accessibilityLabel={"Radio"} accessibilityHint={"Navigate to Radio"}>
                    <Text style={styles.text}>Radio</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.searchOnPress} style={styles.title}
                 accessible={true} accessibilityLabel={"Play"} accessibilityHint={"Navigate to Play"}>
                    <Text style={styles.text}>Play</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.libraryOnPress} style={styles.title}
                 accessible={true} accessibilityLabel={"Library"} accessibilityHint={"Navigate to Library"}>
                    <Text style={styles.text}>Library</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.props.settingsOnPress} style={styles.title}
                 accessible={true} accessibilityLabel={"Settings"} accessibilityHint={"Navigate to Settings"}>
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