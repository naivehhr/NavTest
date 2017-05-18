import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems
 } from 'react-navigation'


import SccondScreen from './SecondScreen'
import ThreeScreen from './ThreeScreen'
import Index from './home-1';
class _App extends Component {

  static navigationOptions = {
    tabBarVisible: true,
    title: 'Home Screen',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  componentDidMount() {
    console.log('====================================');
    console.log('Home did mount');
    console.log('====================================');
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Button 
          title='Go to Next'
          onPress={() => { navigate('Index') }} 
        />
        <Button 
          title='Switch to List'
          onPress={() => { navigate('ScondScreen') }} 
        />
      </View>
    )
  }
}
const Home = TabNavigator({
  Home: { screen: _App },
  ScondScreen: { screen: SccondScreen },
  ThreeScreen: { screen: ThreeScreen },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default Home