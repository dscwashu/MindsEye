import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import { ErrorBoundary } from './src/components/ErrorBoundry';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginPage } from './src/pages/LoginPage';
import { BrowsePage } from './src/pages/BrowsePage';

import { Audio } from 'expo-av';

function LoginScreen({ navigation }) {
  return (
    <LoginPage navigation={navigation}></LoginPage>
  );
}


function BrowseScreen({ navigation }) {
  return(
    <BrowsePage navigation={navigation}></BrowsePage>
  );
}

function LivestreamScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Livestream</Text>
    </View>
  );
}

//Profile Screen
function LibraryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Library</Text>
    </View>
  );
}


// Profile Screen
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}


// Podcast Screen
function PodcastScreen({ navigation, route }) {
  const { url } = route.params; 

  async function playPodcast(){
    console.log(url);
    try {
      const playbackObject = await Audio.Sound.createAsync(
        { uri: url},
        { shouldPlay: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Play"
        
        onPress={playPodcast}
      />
      <Button title="Go back" onPress={() => {
        navigation.goBack()}} />
    </View>
  );
}


const Stack = createStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator>
      {/* Login and Signup */}
      <Stack.Screen name="Login" component={ LoginScreen } />

      {/* Lower Buttons */}
      <Stack.Screen name="Settings" component={ SettingsScreen } />
      <Stack.Screen name="Livestream" component={ LivestreamScreen } />
      <Stack.Screen name="Browse" component={ BrowseScreen } />
      <Stack.Screen name="Library" component={ LibraryScreen } />
      <Stack.Screen name="Podcast" component={ PodcastScreen } />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // <ErrorBoundary>
      <NavigationContainer>
        <PageStack />
      </NavigationContainer>
    //</ErrorBoundary> 
  );
}