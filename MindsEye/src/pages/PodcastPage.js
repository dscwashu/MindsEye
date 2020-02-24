import React from 'react';
import { View, Button } from 'react-native';
import { Podcast } from '../components/Podcast';

export const PodcastScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Podcast url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="Big Title" author="Test Author"/>
        <Podcast url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="Big Title" author="Test Author"/>
        <Podcast url="https://www.rd.com/wp-content/uploads/2017/12/the-true-story-behind-the-mysterious-mcdonalds-gold-card-673955074-Vytautas-Kielaitis-1024x683.jpg" title="Big Title" author="Test Author"/>
      </View>
    );
}