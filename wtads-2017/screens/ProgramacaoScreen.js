import React from 'react';
import {StyleSheet, View, Text, SectionList, TouchableOpacity, LoadingControl, RefreshControl } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  headerSubtitle: {
    color: '#999'
  }
});

const Header = ({title, chair}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>{chair}</Text>
    </View>
  )
}

const Item = ({title}) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default class ProgramacaoScreen extends React.Component {
  state = {
    programacao: [],
    carregando: true
  }

  _carregar = () => {
    this.setState({
      carregando: true
    })

    fetch('https://rawgit.com/chicobentojr/2710b41a9a376bbcd43a634bb7935fd4/raw/4ca17d5a93f47ee35aa02ec35ea0964a8ae2f6bc/wtads2017.json')
      .then(response => response.json())
      .then(({schedule}) => {
        let key = 1;
        this.setState({
          programacao: schedule.map(s => {
            return {
              title: s.title,
              chair: s.chair,
              data: s.activities.map(a => ({...a, key: key++}))
            }
          }),
          carregando: false
        });
      });
  }

  componentDidMount() {
    this._carregar();
  }

  _renderItem({item}) {
    return <Item {...item}/>;
  }

  _renderSectionHeader({section}) {
    return <Header title={section.title} chair={section.chair}/>;
  }

  render() {
    return (
      <View>
        <SectionList 
          refreshControl={
            <RefreshControl
              refreshing={this.state.carregando}
              onRefresh={this._carregar}
            />
          }
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          sections={this.state.programacao}
        />
      </View>
    );
  }
}

