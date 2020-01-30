import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 // Requires Two Props:
 //      1. Title- what tab it will go to
 //      2. which element will be hidden

//style={styles.container}
 // Will need to update with click event
 export class LowB extends Component {

    _onPressButton(){
        alert("nice");
    }


     render() {
         return (
             <View id={this.props.title} style={styles.container}>
                 <Button style={styles.title} title={this.props.title} color='black' onPress={this._onPressButton}/>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container: {
         flexDirection: "row",
         width: '20%',
         height: 100,
         backgroundColor: 'gray',
         alignItems: 'center',
         justifyContent: 'flex-start',
         borderRadius: 1,
         borderWidth: 2,
         borderColor: "black",
         position: 'relative',
         bottom: '-40%',
         textAlign: 'center'
     },
     title: {
         fontSize: 15,
         fontWeight: "bold",
     },
   });
