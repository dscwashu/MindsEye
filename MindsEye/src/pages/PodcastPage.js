import React, {Component} from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import { LowButtons } from '../components/LowerButtons';

import { Audio } from 'expo-av';

// For podcast Listening

export class PodcastPage extends Component {
    
  render(){
    // Podcast Screen
    
      async function playPodcast(route){
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
        <View style={{ height: "107%"}}>
            <View style={{flex: 10, overflow: "scroll", width: "100%", alignItems: 'center', justifyContent: 'flex-start'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', height: "20%"}}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.uri }}
                    />
                    <Button
                        title={this.props.title}
                        onPress={(uri = this.props.uri) => playPodcast(uri)}
                    />
            </View>
            <View style={{flex: 2}}>
                <LowButtons 
                    livestreamOnPress={() => this.props.navigation.navigate('Browse')}
                    browseOnPress={() => this.props.navigation.navigate('Podcast', selectPodcast(0, this.props.navigation))}
                    searchOnPress={() => this.props.navigation.navigate('Podcast', selectPodcast(null, this.props.navigation))}
                    libraryOnPress={() => this.props.navigation.navigate('Library')}
                    settingsOnPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        </View>

    );
    }
}


const styles = StyleSheet.create({
    title:{
        textAlign: "center",
        fontSize: 36,
        margin: 20,
        marginBottom: 0,
        fontWeight: "600",
        overflow: "hidden"
    },
    author:{
        textAlign: "center",
        fontSize: 24,
        fontWeight: "300"
    },
    image:{
        height: "30%",
        width: 300,
        height: 300,
        marginTop: 20,
        marginBottom: 20
    }
});
