import React from 'react';
import { LowB } from './Components/LowerButtons/lowerbuttons';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (


    <View style={styles.container}>

      <View style={styles.button}>
        <LowB title="Livestream"></LowB>
        <LowB title="Browse"></LowB>
        <LowB title="Search"></LowB>
        <LowB title="Library"></LowB>
        <LowB title="Settings"></LowB>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '-70%'
  },
});
