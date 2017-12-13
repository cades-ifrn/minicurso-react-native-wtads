import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
});

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  } 
}
