import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native';
import moment from 'moment';

import AboutInfo from './aboutInfo'

const width = '100%';
const height = '50%';

export default class About extends Component {

  static navigationOptions = {
  title: 'Match Info',
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

  constructor() {
    super();
    this.state = {
      teams: [],
      homeTeamMatches: [],
      awayTeamMatches: [],
      animating1: true,
      animating2: true,
      animating3: true,
      error2: '',
      error3: ''
    }
  }

  componentDidMount = () => {
    let {params} = this.props.navigation.state;
    fetch('https://raw.githubusercontent.com/eriksvedenlund/teamData/master/teams.json')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          teams: response.teams
        })
      }).then(() => {
        this.setState({
          animating1: false
        })
      })
      .catch((error) => {
        console.log(error.message);
      })

    fetch(params.homeLink + '/fixtures', {
      headers: {
        'X-Auth-Token': 'cf642110fe7d494e9b8852f4f338f6de'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          homeTeamMatches: response.fixtures
        })
      }).then(() => {
        this.setState({
          animating2: false
        })
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          animating2: false,
          error2: 'Could not load. Try again'
        })
      })

    fetch(params.awayLink + '/fixtures', {
      headers: {
        'X-Auth-Token': 'cf642110fe7d494e9b8852f4f338f6de'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          awayTeamMatches: response.fixtures
        })
      }).then(() => {
        this.setState({
          animating3: false
        })
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          animating3: false,
          error3: 'Could not load. Try again'
        })
      })
  }

  render() {
    let {params} = this.props.navigation.state;
    let navigate = params.navigate;
    let homeTeamMatches = this.state.homeTeamMatches;
    homeTeamMatches = homeTeamMatches.filter((item) => {
      return item.status === "FINISHED" && item._links.competition.href === params.competition;
    });
    homeTeamMatches = homeTeamMatches.slice(-4);
    let homeTeamForm = homeTeamMatches.map((item) => {
      if(item.homeTeamName === params.homeTeamName){
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
      else{
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
    });
    let awayTeamMatches = this.state.awayTeamMatches;
    awayTeamMatches = awayTeamMatches.filter((item) => {
      return item.status === "FINISHED" && item._links.competition.href === params.competition;
    });
    awayTeamMatches = awayTeamMatches.slice(-4);
    let awayTeamForm = awayTeamMatches.map((item) => {
      if(item.homeTeamName === params.awayTeamName){
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
      else{
        if(item.result.goalsHomeTeam > item.result.goalsAwayTeam){
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/lose.png')} />
          );
        }
        else if(item.result.goalsHomeTeam < item.result.goalsAwayTeam){
          return (
            <Image key={item.matchday} style={styles.img3} source={require('../img/winner.png')} />
          );
        } else {
          return(
            <Image key={item.matchday} style={styles.img3} source={require('../img/draw.png')} />
          );
        }
      }
    });
    let homeTeamImage = this.state.teams.map((item) => {
      if(params.homeTeamName === item.name){
        return(
          <Image key={item.id} style={styles.img} source={{uri: item.img}} />
        );
      }
    });
    let awayTeamImage = this.state.teams.map((item) => {
      if(params.awayTeamName === item.name){
        return(
          <Image key={item.id} style={styles.img} source={{uri: item.img}} />
        );
      }
    });
    let date = moment(params.date).format('D MMM YYYY');
    let day = moment(params.date).format('dddd').toUpperCase();
    return(
      <View style={styles.background}>
        <View style={styles.upperContainer}>
          <Image
            style={styles.landing}
            source={require('../img/go.jpg')}>
            <View style={styles.info}>
                {this.state.animating1 &&
                  <ActivityIndicator
                    size="large"
                  />
                }
                {homeTeamImage}
                <View style={styles.infoOrder}>
                  <Text style={styles.text1}>{day}</Text>
                  <Text style={styles.text2}>{date}</Text>
                  <Text style={styles.text2}>{params.time}</Text>
                </View>
                {this.state.animating1 &&
                  <ActivityIndicator
                    size="large"
                  />
                }
                {awayTeamImage}
            </View>
          </Image>
          <AboutInfo teams={this.state.teams} params={params} homeTeamForm={homeTeamForm} awayTeamForm={awayTeamForm} navigate={navigate} animating2={this.state.animating2} animating3={this.state.animating3} error2={this.state.error2} error3={this.state.error3}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgb(47, 54, 61);"
  },
  landing: {
    height: 220,
    width: "100%"
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
  },
  img3: {
    top: 6,
  }
});
