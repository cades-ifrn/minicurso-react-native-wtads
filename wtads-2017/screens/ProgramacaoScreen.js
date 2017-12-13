import React from 'react';
import {StyleSheet, View, Text, SectionList } from 'react-native';

const Header = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const Item = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default class ProgramacaoScreen extends React.Component {
  state = {
    programacao: []
  }

  componentDidMount() {
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
          })
        });
      });
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
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          sections={this.state.programacao}
        />
      </View>
    );
  }
}

