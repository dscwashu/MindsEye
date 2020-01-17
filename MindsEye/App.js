import React from 'react';
import { LowB } from './Components/LowerButtons/lowerbuttons';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <LowB title="Livestream"></LowB>
      <LowB title="Browse"></LowB>
      <LowB title="Search"></LowB>
      <LowB title="Library"></LowB>
      <LowB title="Settings"></LowB>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
