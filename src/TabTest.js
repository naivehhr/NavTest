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
import Tav from './tab'
import TabViewExample from './TabViewExample'
const App = StackNavigator({
  Home: { screen: Home },
  H1: { 
    screen: H1,
    path: 'chat/:user',
   }
})


console.disableYellowBox = true
const prefix = Platform.OS == 'android' ? 'mychat://mychat/' : 'mychat://';
const MainApp = () => <App uriPrefix={prefix} />;

export default Home