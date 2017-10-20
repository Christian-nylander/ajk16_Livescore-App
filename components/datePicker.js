import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
let now = moment();

// let count = 0;
// let count1 = 0;
// let date = moment(new Date()).format("YYYY-MM-DD")

export default class datePicker extends Component {
  constructor() {
    super();
    // this.state = {
    //   time: date
    // }
  }

  static navigationOptions = {
    title: 'Livescore App'
  };

  pressBack = (date) => {
    console.log(date.format("YYYY-MM-DD")); 
  }

  pressFront = () => {
    // this.setState({
    //   time: moment().add(count, "days").format("YYYY-MM-DD")
    // })
  }

  render(){
    console.log(now);
    return(
      <View>
        <CalendarStrip
          highlightDateNumberStyle={{color: 'blue'}}
          highlightDateNameStyle={{color: 'blue'}}
          startingDate={now}
          selectedDate={now}
          onDateSelected={this.pressBack}
         />
        {/*<TouchableHighlight onPress={this.pressBack}>
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
        </TouchableHighlight>*/}
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
