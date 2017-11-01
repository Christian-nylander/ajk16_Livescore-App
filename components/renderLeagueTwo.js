//Component not in use

import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image} from 'react-native';
import { Constants } from 'expo';

export default class renderLeagueTwo extends Component {
  render() {
    return(
      <View>
      <View style={styles.matchConatiner1}>
        <View style={styles.boxOne}>
          <Text style={styles.minute}>19:15</Text>
          <View style={{width: 160}}>
              <Text style={styles.team, styles.all}>Paris Saint-Germain</Text>
              <Text style={styles.team, styles.all}>Dijoaasdasdasdn</Text>
          </View>
          <View style={styles.score}>
              <Text style={styles.score, styles.all}>0</Text>
              <Text style={styles.score, styles.all}>0</Text>
          </View>
        </View>
        <View style={styles.boxTwo}>
          <Image
            style={styles.infoImage}
            source={require('../img/Untitled-3.png')}
          />
        </View>
      </View>
      <View style={styles.matchConatiner2}>
        <View style={styles.boxOne}>
          <Text style={styles.minute}>20:00</Text>
          <View style={{width: 160}}>
              <Text style={styles.team, styles.all}>AS Monaco FC</Text>
              <Text style={styles.team, styles.all}>Lyon</Text>
          </View>
          <View style={styles.score}>
              <Text style={styles.score, styles.all}>0</Text>
              <Text style={styles.score, styles.all}>0</Text>
          </View>
        </View>
        <View style={styles.boxTwo}>
          <Image
            style={styles.infoImage}
            source={require('../img/Untitled-3.png')}
          />
        </View>
      </View>
      <View style={styles.matchConatiner1}>
        <View style={styles.boxOne}>
          <Text style={styles.minute}>21:00</Text>
          <View style={{width: 160}}>
              <Text style={styles.team, styles.all}>OGC Nice</Text>
              <Text style={styles.team, styles.all}>Montpellier</Text>
          </View>
          <View style={styles.score}>
              <Text style={styles.score, styles.all}>0</Text>
              <Text style={styles.score, styles.all}>0</Text>
          </View>
        </View>
        <View style={styles.boxTwo}>
          <Image
            style={styles.infoImage}
            source={require('../img/Untitled-3.png')}
          />
        </View>
      </View>
    </View>
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
    fontSize: 17,
    top: -4
  },
  score1: {
    fontWeight: "bold"
  }
});
