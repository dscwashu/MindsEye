import React from 'react';
import { Podcast } from './components/Podcast';
import { LowB } from './components/LowerButtons';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollPod}>
        <Podcast uri="https://i.pinimg.com/originals/b5/2e/59/b52e594edee91efcece3bac1479b4c9b.png" title="EA Sports" author="It's in the Game"></Podcast>
        <Podcast uri="https://marketing.dcassetcdn.com/blog/2016/January/top-company-logos-one-color/4_McDonalds_400.png" title="McDonalds" author="I'm Lovin' it!"></Podcast>
        <Podcast uri="https://marketing.dcassetcdn.com/blog/2016/January/top-company-logos-one-color/1_Apple_400.png" title="Apple" author="An Apple product a day will bankrupt you."></Podcast>
      </ScrollView>


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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '5%'
  },
  scrollPod:{
    top: '10%'
  }
});
