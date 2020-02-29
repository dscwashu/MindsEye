import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Requires Two Props:
//      1. Object
//      2. Navigation

// Will need to update with click event
export class NavTab extends Component {
    
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