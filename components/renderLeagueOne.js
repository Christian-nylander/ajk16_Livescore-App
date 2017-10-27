import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image, TouchableHighlight} from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';
import moment from 'moment';
let matchHit = 0;

export default class renderLeagueOne extends Component {
   render() {
    let date = this.props.date;
    let navigate = this.props.navigate;
    let matches = this.props.matches;
    let matchData = matches.map((item, index) => {
        let matchDate = item.date.substring(0, 10);
        if(matchDate === date){
          let localTime = moment(item.date).local().format();
          let time = localTime.substring(11, 16);
          let homeScore = item.result.goalsHomeTeam;
          let awayScore = item.result.goalsAwayTeam;
          if(homeScore === null) {
            homeScore = 0;
            awayScore = 0;
          }
          return(
            <View key={index} style={styles.matchConatiner1}>
              <View style={styles.boxOne}>
                <Text style={styles.minute}>{time}</Text>
                <View style={{width: 160}}>
                    <Text style={styles.team, styles.all}>{item.homeTeamName}</Text>
                    <Text style={styles.team, styles.all}>{item.awayTeamName}</Text>
                </View>
                <View style={styles.score}>
                  {homeScore > awayScore ? (
                      <Text style={styles.score, styles.all, {color: '#4BB543'}}>{homeScore}</Text>
                    ) : (
                      <Text style={styles.score, styles.all}>{homeScore}</Text>
                    )}
                  {awayScore > homeScore ? (
                      <Text style={styles.score, styles.all, {color: '#4BB543'}}>{awayScore}</Text>
                    ) : (
                      <Text style={styles.score, styles.all}>{awayScore}</Text>
                    )}
                </View>
              </View>
              <View style={styles.boxTwo}>
                <TouchableHighlight onPress={() => navigate("About", {homeTeamName: item.homeTeamName, awayTeamName: item.awayTeamName, homeLink: item._links.homeTeam.href, awayLink: item._links.awayTeam.href, competition: item._links.competition.href, navigate: navigate, date: date, time: time})}>
                  <Image
                    style={styles.infoImage}
                    source={require('../img/Untitled-3.png')}
                  />
                </TouchableHighlight>
              </View>
            </View>
          );
        }
    });
    return (
      <View>{matchData}</View>
    );
  }
}


  const styles = StyleSheet.create({
    matchConatiner1: {
      height: 60,
      backgroundColor: "#2d3033",
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    matchConatiner2: {
      height: 70,
      backgroundColor: "#1d1d1d",
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    boxOne: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: "space-between",
      top: 14,
    },
    boxTwo: {
      flex: 1
    },
    minute: {
      left: 10,
      top: 5,
      color: "white",
      fontSize: 16,
      width: 50
    },
    infoImage: {
      height: 59
    },
    all: {
      color: "white",
      fontSize: 13,
      top: -4
    },
    score1: {
      fontWeight: "bold"
    },
    noGames: {
      opacity: 0.5,
      left: 120,
      width: 110,
      height: 110,
      top: 100
    },
    imgPosition: {
      height: 300,
    }
  });
