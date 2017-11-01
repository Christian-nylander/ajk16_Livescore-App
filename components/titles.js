import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import moment from 'moment';

//Components
import DatePicker from './datePicker';
import LeagueOne from './leagueOne';
import About from './about';
import Table from './table';

export default class Titles extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      date : moment().format("YYYY-MM-DD")
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
        this.update();
      }).catch((error) => {
        console.log(error.message);
        this.update();
      })
  }

  setDate = (date) => {
    this.setState({
      date: date
    });
  }

  update = () => {
    setInterval(() => {
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
      }).catch((error) => {
        console.log(error.message);
      })
    }, 10000);
  }

  static navigationOptions = {
  title: 'Live Score App',
  headerTintColor: '#FFFFFF',
  headerStyle: {
  backgroundColor: '#1f272d',
  height: 80,
  },
  headerTitleStyle: {
  fontSize: 18,
  top:10,
  alignSelf: 'center',
  fontWeight: '300',
  }
  };


  render() {
    let {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <DatePicker setDate={this.setDate}/>
        <LeagueOne navigate={navigate} matches={this.state.matches} date={this.state.date}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(47, 54, 61);"
  },
});
