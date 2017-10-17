import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Titles from './components/titles';
import About from './components/about';

const Navigation = StackNavigator({
  Titles: {screen: Titles},
  About: {screen: About}
});

export default Navigation;