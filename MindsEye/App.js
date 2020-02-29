import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

// Temporary
import { LowButtons } from './src/components/LowerButtons';


import { ErrorBoundary } from './src/components/ErrorBoundry';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginPage } from './src/pages/LoginPage';
import { SignUpPage } from './src/pages/SignUpPage';
import { BrowsePage } from './src/pages/BrowsePage';
import { PodcastPage } from './src/pages/PodcastPage';
import { LibraryPage } from './src/pages/LibraryPage';

function selectPodcast(index, navigation){
  console.log(index);
  if(index == 0){
    index = 0
  } else if(index == null){
    index = global.podcastIndex;
  } else {
    global.podcastIndex = index;
  }
  navigation.navigate('Podcast', {
    url: global.Podcasts.urls[index],      //Podcast Link
    uri: global.Podcasts.uris[index],      //Image Link
    title: global.Podcasts.titles[index],  //Title of podcast
    author: global.Podcasts.authors[index] //Author
    }
  );
}

// Login and Signups
function LoginScreen({ navigation }) {
  return (
    <LoginPage navigation={navigation}></LoginPage>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <SignUpPage navigation={navigation}></SignUpPage>
  );
}

// Bottom Button Screens
function BrowseScreen({ navigation }) {
  return(
    <BrowsePage navigation={navigation}></BrowsePage>
  );
}

function LibraryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.tempText}>Temporary Library Screen</Text>
          </ScrollView>
          <View>
            <LowButtons 
              livestreamOnPress={() => navigation.navigate('Browse')}
              browseOnPress={() => navigation.navigate('Podcast', selectPodcast(0, navigation))}
              searchOnPress={() => navigation.navigate('Podcast', selectPodcast(null, navigation))}
              libraryOnPress={() => navigation.navigate('Library')}
              settingsOnPress={() => navigation.navigate('Settings')}
            />
          </View>
      </View>
    // <LibraryPage navigation={navigation}></LibraryPage>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.tempText}>Temporary Settings Screen</Text>
          </ScrollView>
          <View>
            <LowButtons 
              livestreamOnPress={() => navigation.navigate('Browse')}
              browseOnPress={() => navigation.navigate('Podcast', selectPodcast(0, navigation))}
              searchOnPress={() => navigation.navigate('Podcast', selectPodcast(null, navigation))}
              libraryOnPress={() => navigation.navigate('Library')}
              settingsOnPress={() => navigation.navigate('Settings')}
            />
          </View>
      </View>
  );
}

// Speciality Screens
function PodcastScreen({ navigation, route }) {
  const { url, uri, title, author } = route.params;
  return (
    <PodcastPage navigation={navigation} url={url} uri={uri} title={title} author={author}> 
    </PodcastPage>
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


const styles = StyleSheet.create({
  footer: {
    // flex: 1
  },
  scroll: {
    width: "100%",
    height: "80%",
    textAlign: "center",
    // flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    fontSize: 40,
    textAlign: "center"
  }
});
