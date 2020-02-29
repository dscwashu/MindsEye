import React, {Component} from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import { LowButtons } from '../components/LowerButtons';

import '../global/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

// For podcast Listening
export class PodcastPage extends Component {

    componentDidMount(){
        // Toggle the state every second
        this.setState(previousState => (
            { midIcon: global.midIcon }
        ));
    }
    
  render(){
    // Podcast Screen
    state = { 
        midIcon: "play-icon"
    };

    function selectPodcast(index, navigation){
        if(index == 0){
          index = 0
        } else if(index == null){
          index = global.podcastIndex;
        } else {
          global.podcastIndex = index;
        }
        navigation.navigate('Podcast', {
          url: global.Podcasts.urls[index],   //Podcast Link
          uri: global.Podcasts.uris[index],   //Image Link
          title: global.Podcasts.titles[index], //Title of podcast
          author: global.Podcasts.authors[index] //Author
          }
        );
      }

      async function loadPodcast(url){
        try {
            await global.playbackObject.loadAsync({uri: url}, { shouldPlay: true});
        } catch (error) {
            console.log(error);
        }
      }

      async function swapPodcast(url){
        try {
            await global.playbackObject.unloadAsync();
            await global.playbackObject.loadAsync({uri: url}, { shouldPlay: true});
        } catch (error) {
            console.log(error);
        }
      }

      async function playPodcast(url){ 
        var status = await global.playbackObject.getStatusAsync();
        if(status.isLoaded == false){
            loadPodcast(url);
        } else if(status.uri != url){
            swapPodcast(url);
        }

        if(status.isPlaying == false){
            try{
                await global.playbackObject.playAsync();
            } catch (error) {
                console.log(error);
            }
            global.isPlaying = true;
            global.midIcon = "play-circle";
        } else {
            try{
                await global.playbackObject.pauseAsync();
            } catch (error) {
                console.log(error);
            }
            global.isPlaying = false;
            global.midIcon = "pause-circle";
        }
      }

      async function rewind10(){
        var status = await global.playbackObject.getStatusAsync();
        if(status.isLoaded == false){
            return;
        } else {
            await global.playbackObject.setPositionAsync(status.positionMillis - 10000);
        }
      }

      async function forward10(){
        var status = await global.playbackObject.getStatusAsync();
        if(status.isLoaded == false){
            return;
        } else {
            await global.playbackObject.setPositionAsync(status.positionMillis + 10000);
        }
      }
    
      return (
        <View style={{ height: "107%"}}>
            <View style={{flex: 10, overflow: "hidden", width: "100%", alignItems: 'center', justifyContent: 'flex-start'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', height: "20%"}}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                    <Image
                    accessible={true} accessibilityLabel={this.props.author}
                        style={styles.image}
                        source={{ uri: this.props.uri }}
                    />
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "20%", width: "100%"}}>
                    <TouchableOpacity onPress={rewind10}>
                        <Icon
                            accessible={true} accessibilityLabel={"Rewind 10 Seconds Button"} accessibilityHint={"Click to Rewind 10 seconds"}
                            style={{marginRight: 30}}
                            name='backward'
                            size={60}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => playPodcast(this.props.url)}>
                        <Icon
                            accessible={true} accessibilityLabel={"Play and Pause Button"} accessibilityHint={"Click to Play or pause"}
                            name="play-circle"
                            size={80}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={forward10}>
                        <Icon
                            accessible={true} accessibilityLabel={"Fast Forward 10 Seconds Button"} accessibilityHint={"Click to Fast Forward 10 seconds"}
                            style={{marginLeft: 30}}
                            name='forward'
                            size={60}
                        />
                    </TouchableOpacity>
                </View>
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
