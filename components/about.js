import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

import TopBanner from './topBanner';
import AboutInfo from './aboutInfo'

const width = '72%';
const height = '40%';

export default class About extends Component {


  render() {
    return(
      <View style={styles.grogg}>
        <View style={styles.upperContainer}>
          <Image
            style={styles.landing}
            source={require('../img/aa.jpg')}>
            <View style={styles.info}>
                <Image style={styles.img} source={require('../img/580b57fcd9996e24bc43c4e7.png')} />
                <View style={styles.infoOrder}>
                  <Text style={styles.text1}>THURSDAY</Text>
                  <Text style={styles.text2}>18 MAY 2017</Text>
                  <Text style={styles.text2}>19:00</Text>
                </View>
                <Image style={styles.img} source={require('../img/580b57fcd9996e24bc43c4e7.png')} />
            </View>
          </Image>
          <AboutInfo />
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

  }
});
