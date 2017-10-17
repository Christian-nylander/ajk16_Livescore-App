import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

import TopBanner from './topBanner';

export default class AboutInfo extends Component {
  render() {
    return(
      <View style={styles.centerContainer}>
        <View style={styles.firstContainer}>
          <Image style={styles.img} source={require('../img/icon.png')} />
          <Text style={styles.text}>Old Trafford, Manchester</Text>
        </View>
        <View style={styles.secondContainer}>
          <Image style={styles.img} source={require('../img/trophy.png')} />
          <Text style={styles.text}>Premier League</Text>
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.text2}>Manager</Text>
          <View style={styles.managerContainer}>
            <Text style={styles.managerText}>José Mourinho</Text>
              <Image style={styles.img2} source={require('../img/user.png')} />
            <Text style={styles.managerText}>Jurgen Klopp</Text>
          </View>
        </View>
        <View style={styles.fourthContainer}>
          <Text style={styles.text2}>Form</Text>
          <View style={styles.winContainer}>
              <View style={styles.streaks}>
                <Image style={styles.img3} source={require('../img/winner.png')} />
                <Image style={styles.img3} source={require('../img/winner.png')} />
                <Image style={styles.img3} source={require('../img/lose.png')} />
                <Image style={styles.img3} source={require('../img/draw.png')} />
              </View>
            <Image style={styles.imgStats} source={require('../img/bar-chart.png')} />
            <View style={styles.streaks}>
              <Image style={styles.img3} source={require('../img/winner.png')} />
              <Image style={styles.img3} source={require('../img/winner.png')} />
              <Image style={styles.img3} source={require('../img/lose.png')} />
              <Image style={styles.img3} source={require('../img/draw.png')} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstContainer: {
    width: 300,
    height: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  secondContainer: {
    width: 300,
    height: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  thirdContainer: {
    width: 300,
    height: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  fourthContainer: {
    width: 300,
    height: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  img: {
    top: 20
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    top: -10,
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontSize: 14,

  },
  managerText: {
    color: "white",
    fontSize: 14,
    top: 10
  },
  managerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img2: {
    width: 22,
    height: 22,
    top: 10,
    left: -6
  },
  winContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  streaks: {
    flex: 1,
    flexDirection: "row",
    left: 10,
  },
  img3: {
    top: 6
  },
  imgStats: {
    width: 22,
    height: 22,
    top: 10,
    left: -2
  }
});
