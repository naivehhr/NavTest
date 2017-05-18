import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems
 } from 'react-navigation'

 import Home from './Home'
 import SccondScreen from './SecondScreen'
 import ThreeScreen from './ThreeScreen'
import Index from './home-1';

const App = StackNavigator({
  Home: { screen: Home },
  ScondScreen: { screen: SccondScreen },
  ThreeScreen: { screen: ThreeScreen },
  Index: {screen: Index}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  headerMode: 'none'
})

export default App