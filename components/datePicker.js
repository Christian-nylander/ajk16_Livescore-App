import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

export default class datePicker extends Component {
  pickDate = (date) => {
    this.props.setDate(date.format("YYYY-MM-DD"));
  }

  render(){
    return(
      <View>
          <CalendarStrip
            calendarHeaderStyle={{color: 'white'}}
            highlightDateNumberStyle={{color: '#4BB543'}}
            highlightDateNameStyle={{color: '#4BB543'}}
            dateNumberStyle={{color: 'white'}}
            dateNameStyle={{color: 'white'}}
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
