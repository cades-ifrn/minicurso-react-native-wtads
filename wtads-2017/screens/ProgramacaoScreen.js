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

const Header = ({section}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
      <Text style={styles.headerSubtitle}>{section.chair}</Text>
    </View>
  )
}

const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubtitle}>{item.time.start} - {item.time.end}</Text>
      {
        item.description.length
        ? <Text style={styles.itemDescription}>{item.description}</Text>
        : null
      }
      {
        item.speakers.length
        ? <Text style={styles.itemSpeaker}>{item.speakers.join(', ')}</Text>
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

    fetch('https://rawgit.com/cades-ifrn/minicurso-react-native/master/wtads.json')
      .then(response => response.json())
      .then(data => {
        let key = 1;
        this.setState({
          programacao: data.schedule.map(s => {
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
    return <Item item={item} />;
  }

  _renderSectionHeader({section}) {
    return <Header section={section} />;
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

