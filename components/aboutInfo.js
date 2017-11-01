import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';

const center = '50%';

export default class AboutInfo extends Component {
  render() {
    let navigate = this.props.navigate;
    let homeTeamArena = this.props.teams.map((item) => {
      if(this.props.params.homeTeamName === item.name) {
        return(
          <Text key={item.id} style={styles.text}>{item.stadium}</Text>
        );
      }
    });
    let homeTeamManager = this.props.teams.map((item) => {
      if(this.props.params.homeTeamName === item.name) {
        return(
          <Text key={item.id} style={styles.managerText}>{item.coach}</Text>
        );
      }
    });
    let awayTeamManager = this.props.teams.map((item) => {
      if(this.props.params.awayTeamName === item.name) {
        return(
          <Text key={item.id} style={styles.managerText}>{item.coach}</Text>
        );
      }
    });
    return(
      <View style={styles.centerContainer}>
        <View style={styles.firstContainer}>
          <Image style={styles.img} source={require('../img/icon.png')} />
          {homeTeamArena}
        </View>
        <TouchableHighlight onPress={() => navigate("Table")}>
          <View style={styles.secondContainer}>
            <Image style={styles.img} source={require('../img/trophy.png')} />
            <Button style={styles.text4} onPress={() => navigate("Table")}>Premier League</Button>
          </View>
        </TouchableHighlight>
        <View style={styles.thirdContainer}>
          <Text style={styles.text2}>Manager</Text>
          <Image style={styles.img2} source={require('../img/user.png')} />
          <View style={styles.managerContainer}>
            {homeTeamManager}
            {awayTeamManager}
          </View>
        </View>
        <View style={styles.fourthContainer}>
          <Text style={styles.text2}>Form</Text>
          <View style={styles.winContainer}>
            <View style={styles.streaks}>
              {this.props.animating2 && 
                <ActivityIndicator
                  size="large"
                  style={styles.indicator}
                />
              }
              <Text style={{fontSize: 12, color: 'white'}}>{this.props.error2}</Text>
              {this.props.homeTeamForm}
            </View>
            <Image style={styles.imgStats} source={require('../img/bar-chart.png')} />
            <View style={styles.streaks}>
              {this.props.animating3 && 
                  <ActivityIndicator
                    size="large"
                    style={styles.indicator}
                  />
              }
              <Text style={{fontSize: 12, color: 'white'}}>{this.props.error3}</Text>
              {this.props.awayTeamForm}
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
    height: 60,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  secondContainer: {
    width: 300,
    height: 60,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  thirdContainer: {
    width: 300,
    height: 60,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fourthContainer: {
    width: 300,
    height: 60,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  img: {
    top: 14
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    top: -10,
  },
    text4: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    top: -6,
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
  managerText: {
    color: "white",
    fontSize: 12,
    top: 10
  },
  managerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    top: -20
  },
  img2: {
    width: 22,
    height: 22,
    alignItems: "center",
    left: 138,
    top: 5

  },
  winContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  streaks: {
    flex: 1,
    flexDirection: "row",
    left: 7,
  },
  img3: {
    top: 6
  },
  imgStats: {
    width: 22,
    height: 22,
    top: 10,
    left: -2
  },
  indicator: {
    left: "80%"
  },
});
