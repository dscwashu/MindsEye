import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Requires Three Props:
//      1. url: Thumbnail URL
//      2. title: Title of Podcast
//      3. author: Author of Podcast

// Will need to update with click event
export class Podcast extends Component {
    
    render() {   
        return (
       //Physical Layout
            <View style={styles.full}>
                <TouchableOpacity style={styles.container} onPress={this.props.onPress}
                accessible={true} accessibilityLabel={this.props.title} accessibilityHint={"Select Podcast"}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.uri }}
                    />
                    <View style={styles.info}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        {/* <Text style={styles.author}>{this.props.author}</Text> */}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: 150,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 1,
        borderWidth: 2,
        borderColor: "gray"
    },
    image: {
        marginLeft: 20,
        width: 100, 
        height: 100
    },
    info: {
        marginLeft: 30,
        flexShrink: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    author: {
        marginLeft: 10,
        fontSize: 12,
        fontWeight: "500"
    },
    full: {
        width: "100%",
        height: 150
    }
  });
  