import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import moment from 'moment';

//Components
import RenderLeagueOne from './renderLeagueOne';

export default class LegaueOne extends Component {


  static navigationOptions = {
  title: 'Live Score App',
  headerTintColor: '#FFFFFF',
  headerStyle: {
  backgroundColor: 'rgb(47, 54, 61)',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  height: 80,
  },
  headerTitleStyle: {
  fontSize: 18,
  top:10,
  alignSelf: 'center',
  fontWeight: '300',
  }
  };

  render() {
    let date = moment(this.props.date).format('MMM D');
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.leagueInfo}>
            <Image
              style={styles.flag}
              source={require('../img/1200px-Flag_of_England.svg.png')}
            />
            <Text style={styles.leagueText}>Premier League</Text>
          </View>
          <Text style={styles.leagueDate}>{date}</Text>
        </View>
        <RenderLeagueOne navigate={this.props.navigate} matches={this.props.matches} date={this.props.date}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    height: 26,
    backgroundColor: "#1f272d",
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  flag: {
    width: 26,
    height: 16,
    top: 5,
    left: 5
  },
  leagueInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  leagueText: {
    color: "white",
    left: 12,
    top: 3
  },
  leagueDate: {
    color: "white",
    right: 10,
    top: 3
  }
});
