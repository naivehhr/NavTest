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
import App from './src/app'
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
class MyApp extends React.Component {
  render() {
    console.log('this.props in MyApp', this.props); // This will list the initialProps.

    // StackNavigator **only** accepts a screenProps prop so we're passing
    // initialProps through that.
    return <Navigator screenProps={this.props} />; 
  }
}

class HomeScreen extends React.Component {
  render() {
    console.log('this.props in HomeScreen', this.props);
    // This will output something like this: 
    // { screenProps: { ...your initialProps }, navigation: { ...StackNavigator stuff... } }

    return <Text>My initialProps are {JSON.stringify(this.props.screenProps)}.</Text>;
  }
}
const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Home1: { screen: PullScrollViewTest },
},{
  initialRouteName: 'Home',
});
AppRegistry.registerComponent('NavTest', () => PullScrollViewTest);
