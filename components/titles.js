import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

//Components
import TopBanner from './topBanner';
import DatePicker from './datePicker';
import LeagueOne from './leagueOne';
import LeagueTwo from './leagueTwo';
import About from './about';
import Table from './table';

export default class Titles extends Component {
  constructor() {
    super();
    this.state = {
      matches: []
    }
  }

  componentDidMount = () => {
    fetch('http://api.football-data.org/v1/competitions/445/fixtures', {
      headers: {
        'X-Auth-Token': 'cf642110fe7d494e9b8852f4f338f6de'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          matches: response.fixtures
        });
      })
  }

  static navigationOptions = {
  title: 'Live Score App',
  headerTintColor: '#FFFFFF',
  headerStyle: {
  backgroundColor: '#141414',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  },
  headerTitleStyle: {
  fontSize: 18,
  }
  };


  render() {
    let {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
         <TopBanner />
         <DatePicker />
        <LeagueOne navigate={navigate} matches={this.state.matches} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#141414',
  },
});
