import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Podcast } from './src/components/Podcast';
import { LowButtons } from './src/components/LowerButtons';

import { Audio } from 'expo-av';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Podcasts } from './src/pages/PodcastPage';
// import { TestScreen } from './src/pages/TestScreen';



function LoginScreen({ navigation }) {
  state = { 
		name: 'Login'
	};

  onNameChange = (text) => {
		state.name = text;
	}
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top', marginBottom:10 }}>
        <Text style={{fontSize:40, marginTop:50, marginBottom:20}}>{state.name}</Text>
        <Input 
					inputStyle={{ 		
						color: '#000',
            fontSize: 25, 
          }} 
          containerStyle={{marginBottom:20}}
          placeholder="Username"
          leftIcon={
            <Icon
            style={{marginRight: 10}}
              name='user'
              size={24}
              color='black'
            />
          }
          onChangeText={onNameChange}
				/>
        <Input 
					inputStyle={{ 		
						color: '#000',
						fontSize: 25, 
          }} 
          containerStyle={{marginBottom:20}}
          placeholder="Password"
          leftIcon={
            <Icon
            style={{marginRight: 10}}
              name='lock'
              size={24}
              color='black'
            />
          }
          onChangeText={onNameChange}
          secureTextEntry={true}
				/>
        <Button
        title="Enter"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button title="Go back" onPress={() => navigation.navigate('Profile')} /> */}
        <ScrollView style={styles.scroll}>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Play", uri: "" })} uri="data:image/png;base64,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" title="USA Today" author="USA Today (repeat from yesterday)"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Play", uri: "http://mindseyeradio.streamguys1.com/Breathe.mp3"})} uri="data:image/jpeg;base64,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" title="Breathe" author="Spirituality and Health, Yoga Journal and Live Happy"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} uri="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} uri="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} uri="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} uri="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} uri="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
          <Podcast onPress={() => navigation.navigate('Podcast', { title: "Who knew? Nav and Stuff"})} uri="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="And 3" author="Test Author"/>
        </ScrollView>
        <View style={styles.footer}>
          <LowButtons 
            livestreamOnPress={() => navigation.navigate('Livestream')} 
            browseOnPress={() => navigation.navigate('Browse')} 
            searchOnPress={() => navigation.navigate('Play')} 
            libraryOnPress={() => navigation.navigate('Library')}  
            settingsOnPress={() => navigation.navigate('Settings')} 
          />
        </View>
    
    </View>
  );
}

function LivestreamScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Livestream</Text>
    </View>
  );
}

function BrowseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Browse</Text>
    </View>
  );
}

//Settings Screen
function PlayScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Play</Text>
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
  const { title } = route.params;
  const soundObject = new Audio.Sound();

  async function playPodcast(){
    try {
      await soundObject.loadAsync(require('./src/assets/mp3/USAToday.mp3'));
      await soundObject.playAsync();
      navigation.navigate("Play");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title={JSON.stringify(title)}
        
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
      <Stack.Screen name=" " component={ LoginScreen } />
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Settings" component={ SettingsScreen } />
      <Stack.Screen name="Podcast" component={ PodcastScreen } />
      <Stack.Screen name="Livestream" component={ LivestreamScreen } />
      <Stack.Screen name="Browse" component={ BrowseScreen } />
      <Stack.Screen name="Play" component={ PlayScreen } />
      <Stack.Screen name="Library" component={ LibraryScreen } />
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
