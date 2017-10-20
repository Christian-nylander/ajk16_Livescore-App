import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import moment from 'moment';
var now = moment().format();

let count = 0;
let count1 = 0;
let startdate;
let date = moment(new Date()).format("YYYY-MM-DD")

export default class datePicker extends Component {
  constructor() {
    super();
    this.state = {
      time: date
    }
  }

  static navigationOptions = {
    title: 'Livescore App'
  };

  pressBack= () => {
    count = this.state.time;
    this.setState({
      time: moment().subtract(count, "days").format("YYYY-MM-DD")
    })
  }

  pressFront= () => {
    count =
    this.setState({
      time: moment().add(count1, "days").format("YYYY-MM-DD")
    })
  }

  render(){

    return(
      <View style={styles.dateContainer}>
        <TouchableHighlight onPress={this.pressBack}>
          <Image
            style={styles.arrow}
            source={require('../img/chevron-sign-left.png')}
          />
            </TouchableHighlight>
              <Text style={styles.dateText}>{this.state.time}</Text>
            <TouchableHighlight onPress={this.pressFront}>
          <Image
            style={styles.arrow}
            source={require('../img/chevron-sign-to-right.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    height: 60,
    backgroundColor: "#1d1d1d",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  dateText: {
    color: "white",
    fontSize: 20,
    top: 14
  },
  arrow: {
    top: 16
  },
});
