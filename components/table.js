import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

import TopBanner from './topBanner';
let count = true;

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
      if(count === true){
        count = false;
      return(
        <View key={item.position} style={styles.container}>
          <View style={styles.containerOne}>
            <Text style={styles.text}>{item.position}</Text>
          </View>
            <View style={styles.containerTwo}>
              <Text style={styles.text1}>{item.teamName}</Text>
            </View>
              <View style={styles.containerThree}>
                <Text style={styles.text1}>{item.playedGames}</Text>
              </View>
                <View style={styles.containerThree}>
                  <Text style={styles.text1}>{item.wins}</Text>
                </View>
              <View style={styles.containerThree}>
                <Text style={styles.text1}>{item.draws}</Text>
              </View>
            <View style={styles.containerThree}>
              <Text style={styles.text1}>{item.losses}</Text>
            </View>
          <View style={styles.containerThree}>
            <Text style={styles.text1}>{item.points}</Text>
          </View>
        </View>
      );

    }
    else {
      count = true;
      return(
        <View key={item.position} style={styles.container}>
          <View style={styles.containerOne2}>
            <Text style={styles.text}>{item.position}</Text>
          </View>
            <View style={styles.containerTwo2}>
              <Text style={styles.text1}>{item.teamName}</Text>
            </View>
              <View style={styles.containerThree2}>
                <Text style={styles.text1}>{item.playedGames}</Text>
              </View>
                <View style={styles.containerThree2}>
                  <Text style={styles.text1}>{item.wins}</Text>
                </View>
              <View style={styles.containerThree2}>
                <Text style={styles.text1}>{item.draws}</Text>
              </View>
            <View style={styles.containerThree2}>
              <Text style={styles.text1}>{item.losses}</Text>
            </View>
          <View style={styles.containerThree2}>
            <Text style={styles.text1}>{item.points}</Text>
          </View>
        </View>
      );
    }
    });
    return(
      <ScrollView>
        <View style={styles.leagueContainer}>
          <Image
            style={styles.flag}
            source={require('../img/1200px-Flag_of_England.svg.png')}
          />
          <Text style={styles.leaguetext}> Premier League</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.bannerFlexOne}>
            <Text style={styles.text}>#</Text>
          </View>
            <View style={styles.bannerFlexTwo}>
              <Text style={styles.text1}>Club</Text>
            </View>
              <View style={styles.bannerFlexThree}>
                <Text style={styles.text1}>P</Text>
                </View>
                <View style={styles.bannerFlexThree}>
                  <Text style={styles.text1}>W</Text>
                </View>
              <View style={styles.bannerFlexThree}>
                <Text style={styles.text1}>D</Text>
              </View>
            <View style={styles.bannerFlexThree}>
              <Text style={styles.text1}>L</Text>
            </View>
          <View style={styles.bannerFlexThree}>
            <Text style={styles.text1}>P</Text>
          </View>
        </View>
        {tableData}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  leaguetext: {
    color: "white",
    left: 12,
    top: 3
  },
  containerOne: {
    width: 30,
    height: 26,
    backgroundColor: "#1f1f1f",
  },
  containerTwo: {
    width: 220,
    backgroundColor: "#282828",
    height: 26,
  },
  containerThree: {
    width: 30,
    backgroundColor: "#282828",
    height: 26,
  },
  containerOne2: {
    width: 30,
    height: 26,
    backgroundColor: "#1f1f1f",
  },
  containerTwo2: {
    width: 220,
    backgroundColor: "#383838",
    height: 26,
  },
  containerThree2: {
    width: 30,
    backgroundColor: "#383838",
    height: 26,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  text1: {
    fontSize: 16,
    color: "white",
    left: 10
  },
  bannerFlexOne: {
    width: 30,
    height: 26,
    backgroundColor: "#171717",
  },
  bannerFlexTwo: {
    width: 220,
    height: 26,
    backgroundColor: "#171717",
  },
  bannerFlexThree: {
    width: 30,
    backgroundColor: "#171717",
    height: 26,
  },
  leagueContainer: {
    height: 26,
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row"
  },
  flag: {
    width: 26,
    height: 16,
    top: 5,
    left: 5
  },
});
