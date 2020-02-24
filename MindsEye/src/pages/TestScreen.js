import React from 'react';
import { View, Button } from 'react-native';

export const testScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}