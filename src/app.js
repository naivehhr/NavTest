import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Platform
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems
 } from 'react-navigation'

import Home from './home'
import H1 from './home-1';
import L1 from './list-1';
import A1 from './account-1';

const App = StackNavigator({
  Home: { screen: Home },
  H1: { 
    screen: H1,
    path: 'chat/:user',
   },
  L1: { screen: L1 },
  A1: { screen: A1 }
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  headerMode: 'none',
})


console.disableYellowBox = true
const prefix = Platform.OS == 'android' ? 'mychat://mychat/' : 'mychat://';
const MainApp = () => <App uriPrefix={prefix} />;

export default MainApp