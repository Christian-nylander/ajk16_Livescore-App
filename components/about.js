import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';
import moment from 'moment';

import TopBanner from './topBanner';
import AboutInfo from './aboutInfo'

const width = '72%';
const height = '40%';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      homeTeamMatches: [],
      awayTeamMatches: []
    }
  }

  componentDidMount = () => {
    let {params} = this.props.navigation.state;
    fetch('https://raw.githubusercontent.com/eriksvedenlund/teamData/master/teams.json')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          teams: response.teams
        });
      }).catch((error) => {
        console.log(error.message);
      })

    fetch(params.homeLink + '/fixtures', {
      headers: {
        'X-Auth-Token': 'cf642110fe7d494e9b8852f4f338f6de'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          homeTeamMatches: response.fixtures
        });
      }).catch((error) => {
        console.log(error.message);
      })

    fetch(params.awayLink + '/fixtures', {
      headers: {
        'X-Auth-Token': 'cf642110fe7d494e9b8852f4f338f6de'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          awayTeamMatches: response.fixtures
        });
      }).catch((error) => {
        console.log(error.message);
      })
  }

  render() {
    let {params} = this.props.navigation.state;
    let navigate = params.navigate;
    let homeTeamMatches = this.state.homeTeamMatches;
    homeTeamMatches = homeTeamMatches.filter((item) => {
      return item.status === "FINISHED" && item._links.competition.href === params.competition;
    });
    homeTeamMatches = homeTeamMatches.slice(-4);
    let homeTeamForm = homeTeamMatches.map((item) => {
      if(item.homeTeamName === params.homeTeamName){
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
      else{
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
    });
    let awayTeamMatches = this.state.awayTeamMatches;
    awayTeamMatches = awayTeamMatches.filter((item) => {
      return item.status === "FINISHED" && item._links.competition.href === params.competition;
    });
    awayTeamMatches = awayTeamMatches.slice(-4);
    let awayTeamForm = awayTeamMatches.map((item) => {
      if(item.homeTeamName === params.awayTeamName){
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
      else{
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
    });
    let homeTeamImage = this.state.teams.map((item) => {
      if(params.homeTeamName === item.name){
        return(
          <Image key={item.id} style={styles.img} source={{uri: item.img}} />
        );
      }
    });
    let awayTeamImage = this.state.teams.map((item) => {
      if(params.awayTeamName === item.name){
        return(
          <Image key={item.id} style={styles.img} source={{uri: item.img}} />
        );
      }
    });
    let date = moment(params.date).format('D MMM YYYY');
    let day = moment(params.date).format('dddd').toUpperCase();
    return(
      <View style={styles.grogg}>
        <View style={styles.upperContainer}>
          <Image
            style={styles.landing}
            source={require('../img/aaaaa.jpg')}>
            <View style={styles.info}>
                {homeTeamImage}
                <View style={styles.infoOrder}>
                  <Text style={styles.text1}>{day}</Text>
                  <Text style={styles.text2}>{date}</Text>
                  <Text style={styles.text2}>{params.time}</Text>
                </View>
                {awayTeamImage}
            </View>
          </Image>
          <AboutInfo teams={this.state.teams} params={params} homeTeamForm={homeTeamForm} awayTeamForm={awayTeamForm} navigate={navigate}/>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  grogg: {
    flex: 1,
    backgroundColor: "#141414"
  },
  landing: {
    height: 220
  },
  upperContainer: {
    flex: 1,
    height: 220,
  },
  img: {
    width: 70,
    height: 70
  },
  info: {
    width,
    height,
    top: 70,
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  infoOrder: {

  },
  text1: {
    color: "white",
    fontSize: 30,
    textAlign: "center"

  },
  text2: {
    color: "white",
    fontSize: 18,
    textAlign: "center"

  },
  text3: {
    color: "white",
    fontSize: 18,
    textAlign: "center"

  },
  img3: {
    top: 6
  }
});
