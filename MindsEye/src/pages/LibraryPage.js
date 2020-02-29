import React, {Component} from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

// Our built buttons
import { Podcast } from '../components/Podcast';
import { LowButtons } from '../components/LowerButtons';

import '../global/constants';

// For podcast Listening

export class LibraryPage extends Component {
  render(){

    var podcastElements = [];

    global.Podcasts.titles.map((a,index) => {
      if(index != 0){
        podcastElements.push(
            <Podcast key={index} onPress={() => selectPodcast(index, this.props.navigation)}
                title={global.Podcasts.titles[index]}
                author={global.Podcasts.authors[index]}
                uri={global.Podcasts.uris[index]}/>
        );
      }
    });

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

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={styles.scroll}>

            {podcastElements}

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
