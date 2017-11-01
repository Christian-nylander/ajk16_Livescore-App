import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

let count = true;
const widthBig= "50%";
const widthSmal = "8.3%";

export default class Table extends Component {
  constructor(){
    super();
    this.state = {
      table: []
    }
  }

   componentDidMount = () => {
    fetch('http://api.football-data.org/v1/competitions/445/leagueTable', {
      headers: {
        'X-Auth-Token': 'cf642110fe7d494e9b8852f4f338f6de'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          table: response.standing
        });
      })
  }

  static navigationOptions = {
  title: 'Table',
  headerTintColor: '#FFFFFF',
  headerStyle: {
  backgroundColor: 'rgb(47, 54, 61)',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  height: 80,
  },
  headerTitleStyle: {
  fontSize: 18,
  left: "22%",
  fontWeight: '300',
  top: 10
  }
  };

  render() {
    let tableData = this.state.table.map((item, index) => {
      if(count === true){
        count = false;
      return(
        <View key={item.position} style={styles.container}>
          {item.position < 4 ? (
            <View style={styles.containerOneGreen}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            ) : (item.position === 4 ? (
            <View style={styles.containerOnedDarkGreen}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            ) : (item.position > 17 ? (
            <View style={styles.containerOneRed}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            ) : (
            <View style={styles.containerOne}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            )))}
            <View style={styles.containerTwo}>
              <Text style={styles.text1}>{item.teamName}</Text>
            </View>
              <View style={styles.containerThree}>
                <Text style={styles.text1}>{item.playedGames}</Text>
              </View>
                <View style={styles.containerThree}>
                  <Text style={styles.text1}>{item.wins}</Text>
                </View>
              <View style={styles.containerThree}>
                <Text style={styles.text1}>{item.draws}</Text>
              </View>
            <View style={styles.containerThree}>
              <Text style={styles.text1}>{item.losses}</Text>
            </View>
          <View style={styles.containerThree}>
            <Text style={styles.text1}>{item.points}</Text>
          </View>
        </View>
      );

    }
    else {
      count = true;
      return(
        <View key={item.position} style={styles.container}>
          {item.position < 4 ? (
            <View style={styles.secondContainerGreen}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            ) : (item.position === 4 ? (
            <View style={styles.secondContainerBlue}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            ) : (item.position > 17 ? (
            <View style={styles.secondContainerRed}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            ) : (
            <View style={styles.containerOne}>
              <Text style={styles.text}>{item.position}</Text>
            </View>
            )))}
            <View style={styles.containerTwo2}>
              <Text style={styles.text1}>{item.teamName}</Text>
            </View>
              <View style={styles.containerThree2}>
                <Text style={styles.text1}>{item.playedGames}</Text>
              </View>
                <View style={styles.containerThree2}>
                  <Text style={styles.text1}>{item.wins}</Text>
                </View>
              <View style={styles.containerThree2}>
                <Text style={styles.text1}>{item.draws}</Text>
              </View>
            <View style={styles.containerThree2}>
              <Text style={styles.text1}>{item.losses}</Text>
            </View>
          <View style={styles.containerThree2}>
            <Text style={styles.text1}>{item.points}</Text>
          </View>
        </View>
      );
    }
    });
    return(
      <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.leagueContainer}>
          <Image
            style={styles.flag}
            source={require('../img/1200px-Flag_of_England.svg.png')}
          />
          <Text style={styles.leaguetext}> Premier League</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.bannerFlexOne}>
            <Text style={styles.text}>#</Text>
          </View>
            <View style={styles.bannerFlexTwo}>
              <Text style={styles.text1}>Club</Text>
            </View>
              <View style={styles.bannerFlexThree}>
                <Text style={styles.text1}>P</Text>
                </View>
                <View style={styles.bannerFlexThree}>
                  <Text style={styles.text1}>W</Text>
                </View>
              <View style={styles.bannerFlexThree}>
                <Text style={styles.text1}>D</Text>
              </View>
            <View style={styles.bannerFlexThree}>
              <Text style={styles.text1}>L</Text>
            </View>
          <View style={styles.bannerFlexThree}>
            <Text style={styles.text1}>P</Text>
          </View>
        </View>
        {tableData}
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leaguetext: {
    color: "white",
    left: 12,
    top: 3
  },
  containerOne: {
    width: widthSmal,
    height: 28,
    backgroundColor: "#1f1f1f",
  },
  containerOneGreen: {
    width: widthSmal,
    height: 28,
    backgroundColor: "#315027"
  },
  containerOnedDarkGreen: {
    width: widthSmal,
    height: 28,
    backgroundColor: '#3b4a36'
  },
  containerOneRed: {
    width: widthSmal,
    height: 28,
    backgroundColor: '#794a3b'
  },
  containerTwo: {
    width: widthBig,
    backgroundColor: "#282828",
    height: 28,
  },
  containerThree: {
    width: widthSmal,
    backgroundColor: "#282828",
    height: 28,
  },
  secondContainer: {
    width: widthSmal,
    height: 28,
    backgroundColor: "#1f1f1f",
  },
  secondContainerGreen: {
    width: widthSmal,
    height: 28,
    backgroundColor: "#315027"
  },
  secondContainerBlue: {
    width: widthSmal,
    height: 28,
    backgroundColor: '#3b4a36'
  },
  secondContainerRed: {
    width: widthSmal,
    height: 28,
    backgroundColor: '#794a3b'
  },
  containerTwo2: {
    width: widthBig,
    backgroundColor: "#383838",
    height: 28,
  },
  containerThree2: {
    width: widthSmal,
    backgroundColor: "#383838",
    height: 28,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    top: 3
  },
  text1: {
    fontSize: 14,
    color: "white",
    left: 10,
    top: 3
  },
  bannerFlexOne: {
    width: widthSmal,
    height: 28,
    backgroundColor: "#171717",
  },
  bannerFlexTwo: {
    width: widthBig,
    height: 28,
    backgroundColor: "#171717",
  },
  bannerFlexThree: {
    width: widthSmal,
    backgroundColor: "#171717",
    height: 28,
  },
  leagueContainer: {
    height: 28,
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row"
  },
  flag: {
    width: 28,
    height: 16,
    top: 5,
    left: 5
  },
});
