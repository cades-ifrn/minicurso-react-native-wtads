import React from 'react';
import {StyleSheet, View, Text, SectionList, TouchableOpacity, LoadingControl, RefreshControl } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#3F51B5',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  headerSubtitle: {
    color: '#BDBDBD'
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemSubtitle: {
    color: '#666',
    fontSize: 10
  },
  itemDescription: {
    textAlign: 'justify',
    fontSize: 12
  },
  itemSpeaker: {
    fontSize: 10
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

const Item = ({title, description, time, speakers}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemSubtitle}>{time.start} - {time.end}</Text>
      {
        description.length
        ? <Text style={styles.itemDescription}>{description}</Text>
        : null
      }
      {
        speakers.length
        ? <Text style={styles.itemSpeaker}>{speakers.join(', ')}</Text>
        : null
      }
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

    fetch('https://rawgit.com/chicobentojr/2710b41a9a376bbcd43a634bb7935fd4/raw/4f7f3ef7e520f625b881786a9d7bd7436086f7a3/wtads2017.json')
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
              onRefresh={() => this._carregar()}
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

