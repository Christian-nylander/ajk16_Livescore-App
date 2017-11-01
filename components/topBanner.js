//Component not in use

import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

export default class TopBanner extends Component {
  render() {
    return(
      <View style={styles.topBanner}>
        <View style={styles.flexView}>
          <Image
            style={styles.stretch}
            source={require('../img/52152.png')}
          />
          <Text style={styles.menuText}>Menu and settings</Text>
        </View>
          <Image
            style={styles.toggle}
            source={require('../img/toggle_off1600.png')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBanner: {
    height: 60,
    backgroundColor: "#333333",
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  stretch: {
    width: 40,
    height: 40,
    top: 10,
    left: 10
  },
  flexView: {
    flex: 1,
    flexDirection: 'row',
  },
  menuText: {
    color: "white",
    fontSize: 16,
    left: 20,
    top: 18
  },
  toggle: {
    width: 40,
    height: 20,
    top: 18,
    right: 20
  }
});
