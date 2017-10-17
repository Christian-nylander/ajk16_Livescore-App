import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

import TopBanner from './topBanner';

export default class Table extends Component {
  constructor(){
    super();

    this.state = {
      table: []
    }
  }

   componentDidMount = () => {
    fetch('http://api.football-data.org/v1/competitions/445/leagueTable', {
      headers: {
        'X-Auth-Token': 'cf642110fe7d494e9b8852f4f338f6de'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          table: response.standing
        });
      })
  }

  static navigationOptions = {
    title: 'Table'
  };

  render() {
    let tableData = this.state.table.map((item, index) => {
      return(
        <View key={index} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>{item.position}</Text>
          <Text>{item.teamName}</Text>
          <Text>{item.playedGames}</Text>
          <Text>{item.wins}</Text>
          <Text>{item.draws}</Text>
          <Text>{item.losses}</Text>
          <Text>{item.points}</Text>
        </View>
      );
    });
    return(
      <ScrollView style={styles.container}>
        {tableData}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#141414',
  }
});
