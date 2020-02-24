import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 // Requires Two Props:
 //      1. Title- what tab it will go to
 //      2. which element will be hidden

//style={styles.container}
 // Will need to update with click event
 export class LowB extends Component {
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
         
     },
     title: {
         
     },
   });
