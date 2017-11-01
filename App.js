import React from 'react';
import { StackNavigator } from 'react-navigation';
import Titles from './components/titles';
import About from './components/about';
import Table from './components/table';

const Navigation = StackNavigator({
  Titles: {screen: Titles},
  Table: {screen: Table},
  About: {screen: About}
});

export default Navigation;