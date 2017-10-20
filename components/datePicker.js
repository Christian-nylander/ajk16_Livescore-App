import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

// let count = 0;
// let count1 = 0;
// let date = moment(new Date()).format("YYYY-MM-DD")

export default class datePicker extends Component {
  pickDate = (date) => {
    this.props.setDate(date.format("YYYY-MM-DD"));
  }

  render(){
    return(
      <View>
        <CalendarStrip
          highlightDateNumberStyle={{color: 'blue'}}
          highlightDateNameStyle={{color: 'blue'}}
          onDateSelected={this.pickDate}
         />
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
