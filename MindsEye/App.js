import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Podcast } from './src/components/Podcast';
import { LowButtons } from './src/components/LowerButtons';

// import { Podcasts } from './src/pages/PodcastPage';
// import { TestScreen } from './src/pages/TestScreen';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button title="Go back" onPress={() => navigation.navigate('Profile')} /> */}
        <ScrollView style={styles.scroll}>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Jimmy Bowl" })} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="Test 1" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "The Amazing Airlingo"})} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="Test 2" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
        </ScrollView>
        <View style={styles.footer}>
          <LowButtons></LowButtons>         
        </View>
    
    </View>
  );
}

function ProfileScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function PodcastScreen({ navigation, route }) {
  const { title } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title={JSON.stringify(title)}
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Profile" component={ ProfileScreen } />
      <Stack.Screen name="Podcast" component={ PodcastScreen } />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <PageStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footer: {
    // flex: 1
  },
  scroll: {
    width: "100%",
    height: "80%"
    // flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
