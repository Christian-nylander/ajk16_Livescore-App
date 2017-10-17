import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { Constants } from 'expo';



export default class datePicker extends Component {
  static navigationOptions = {
    title: 'Livescore App'
  };

  render(){
    return(
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>May 18 2017</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    height: 30,
    backgroundColor: "#1d1d1d",
  },
  dateText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    top: 4
  }
});
