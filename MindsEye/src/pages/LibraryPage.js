import React, {Component} from 'react';
import { View, Button, StyleSheet, ScrollView, Text } from 'react-native';

// Our built buttons
import { Podcast } from '../components/Podcast';
import { LowButtons } from '../components/LowerButtons';
import { NavTab } from '../components/NavTab';

import '../global/constants';

// For podcast Listening

export class LibraryPage extends Component {
  render(){

    var tabElements = [];
    var index = 0;
    if(this.props.Obj.titles == null){
      for(const tab in this.props.Obj){
        tabElements.push(
            <NavTab key={index} title={tab} Obj={this.props.Obj[tab]} navigation={this.props.navigation}></NavTab>
        );
        index++;
      };
    } else {
      tabElements.push(
        <Text key="1" style={{
          fontSize: 60,
          textAlign: "center"
         }
        }>List of Potential Listening Podcasts!</Text> 
      )
    }
    
    
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

            {tabElements}

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
