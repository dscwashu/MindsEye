import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import { ErrorBoundary } from './src/components/ErrorBoundry';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginPage } from './src/pages/LoginPage';
import { SignUpPage } from './src/pages/SignUpPage';
import { BrowsePage } from './src/pages/BrowsePage';
import { PodcastPage } from './src/pages/PodcastPage';



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

function PodcastScreen({ navigation, route }) {
  const { url, uri, title, author } = route.params;
  return (
    <PodcastPage navigation={navigation} url={url} uri={uri} title={title} author={author}> 
    </PodcastPage>
  );
}

//Profile Screen
function LibraryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Temporary Library Text</Text>
    </View>
  );
}


// Profile Screen
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Temporary Settings Text</Text>
    </View>
  );
}

// Profile Screen
function SignUpScreen({ navigation }) {
  return (
    <SignUpPage navigation={navigation}></SignUpPage>
  );
}

const Stack = createStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator>
      {/* Login and Signup */}
      <Stack.Screen name="Login" component={ LoginScreen } />
      <Stack.Screen name="SignUp" component={ SignUpScreen } />

      {/* Lower Buttons */}
      <Stack.Screen name="Settings" component={ SettingsScreen } />
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
    // </ErrorBoundary> 
  );
}