import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

//Components
import TopBanner from './topBanner';
import DatePicker from './datePicker';
import LeagueOne from './leagueOne';
import LeagueTwo from './leagueTwo';
import About from './about.js'
export default class Titles extends Component {


  static navigationOptions = {
    title: 'Livescore App'
  };


  render() {
    return (
      <ScrollView style={styles.container}>
      <About />
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
