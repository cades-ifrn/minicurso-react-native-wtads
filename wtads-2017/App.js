import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from './assets/7wtads_v2.png'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={logo} resizeMode="contain" />
        <Text style={styles.title}>7º WTADS</Text>
        <Text style={styles.subtitle}>13, 14 e 15 de dezembro</Text>
        <Button color='#FFCC00' style={styles.button} title="Ver programação" onPress={() => console.log('Pressed')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0A47',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: 150,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 50
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30
  },  
  button: {
    color: '#ccc'
  }
});
