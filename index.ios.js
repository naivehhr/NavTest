/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'

// import App from './app'
// import App from './src/app'
// import TabTest from './src/TabTest'
// import Test from './Test'
import PullScrollViewTest from './PullScrollViewTest'
// import App from './js/App';
// import App from './src/MyNavigator';

// export default class NavTest extends Component {
//   render() {
//     const { navigation } = this.props
//     return (
//       <App navigation={navigation}/>
//     );
//   }
// }

// const SimpleApp = StackNavigator({
//   Home: { screen: App },
//   SecondScreen: { screen: SecondScreen }
// }, {
//   headerMode: 'none',
// })

AppRegistry.registerComponent('NavTest', () => PullScrollViewTest);
