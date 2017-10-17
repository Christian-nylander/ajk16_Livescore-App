import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image, TouchableHighlight} from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

export default class renderLeagueOne extends Component {
  render() {
    let navigate = this.props.navigate;
    let matches = this.props.matches
    let matchData = matches.map((item, index) => {
      if(item.status === "FINISHED"){
        let time = item.date.substring(11, 16);
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
                  <Text style={styles.score, styles.all}>{homeScore}</Text>
                  <Text style={styles.score, styles.all}>{awayScore}</Text>
              </View>
            </View>
            <View style={styles.boxTwo}>
              <TouchableHighlight onPress={() => navigate("About", {homeTeamName: item.homeTeamName, awayTeamName: item.awayTeamName, matches: matches})}>
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
    return(
      <View>{matchData}</View>
    );
  }
}

const styles = StyleSheet.create({
  matchConatiner1: {
    height: 70,
    backgroundColor: "#141414",
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
    width: 200,
    height: 90,
    top: -10
  },
  all: {
    color: "white",
    fontSize: 15,
    top: -4
  },
  score1: {
    fontWeight: "bold"
  }
});
