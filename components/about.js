import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';
import Button from 'react-native-button';

import TopBanner from './topBanner';
import AboutInfo from './aboutInfo'

export default class About extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     teams: []
  //   }
  // }

  // componentDidMount = () => {
  //   fetch('https://raw.githubusercontent.com/eriksvedenlund/teamData/master/teams.json')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.setState({
  //         teams: response.teams
  //       });
  //     })
  // }

  render() {
    // let {params} = this.props.navigation.state;
    // let homeTeamImage = this.state.teams.map((item) => {
    //   if(params.homeTeamName === item.name){
    //     return(
    //       <Image key={item.id} style={styles.img} source={{uri: item.img}} />
    //     );
    //   }
    // });
    // let awayTeamImage = this.state.teams.map((item) => {
    //   if(params.awayTeamName === item.name){
    //     return(
    //       <Image key={item.id} style={styles.img} source={{uri: item.img}} />
    //     );
    //   }
    // });
    return(
      <View>
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
        </View>
        <AboutInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  landing: {
    height: 220
  },
  upperContainer: {
    height: 220,
  },
  img: {
    width: 100,
    height: 100
  },
  info: {
    top: 60,
    width: 410,
    flex: 1,
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
