import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Podcasts } from './src/pages/PodcastPage';
// import { TestScreen } from './src/pages/TestScreen';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
