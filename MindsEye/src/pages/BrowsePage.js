import React, {Component} from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

// Our built buttons
import { Podcast } from '../components/Podcast';
import { LowButtons } from '../components/LowerButtons';

import '../global/constants';

// For podcast Listening

export class BrowsePage extends Component {
  render(){
    
    function selectPodcast(index, navigation){
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

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={styles.scroll}>
            <Podcast onPress={() => selectPodcast(1, this.props.navigation)}
              title={global.Podcasts.titles[1]}
              author={global.Podcasts.authors[1]}
              uri={global.Podcasts.uris[1]}/>

            <Podcast onPress={() => selectPodcast(2, this.props.navigation)} 
              title={global.Podcasts.titles[2]}
              author={global.Podcasts.authors[2]}
              uri={global.Podcasts.uris[2]}
              />
          
          <Podcast onPress={() => selectPodcast(3, this.props.navigation)} 
              title={global.Podcasts.titles[3]}
              author={global.Podcasts.authors[3]}
              uri={global.Podcasts.uris[3]}/>

            <Podcast onPress={() => selectPodcast(4, this.props.navigation)} 
              title={global.Podcasts.titles[4]}
              author={global.Podcasts.authors[4]}
              uri={global.Podcasts.uris[4]}/>

            <Podcast onPress={() => selectPodcast(5, this.props.navigation)} 
              title={global.Podcasts.titles[5]}
              author={global.Podcasts.authors[5]}
              uri={global.Podcasts.uris[5]}/>

          </ScrollView>
          <View>
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
