import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  NativeModules,
  Dimensions
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems,
  NavigationActions
 } from 'react-navigation'

const {height, width} = Dimensions.get('window');
import List from './list'
import Account from './account'
import H1 from './home-1';

import RefreshFlatList, { RefreshState, ViewType } from 'react-native-refreshflatlist'
class _App extends Component {

  // static navigationOptions = {
  //   tabBarVisible: true,
  //   title: 'Home Screen',
  //   tabBarLabel: 'Home',
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('./img/home.png')}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // }

  componentDidMount() {
    console.log('====================================');
    console.log('====================================');
  }

  componentWillUnmount () {
    console.log('====================================');
    console.log('Home will unmount');
    console.log('====================================');
  }
  

  goTo = () => {
    const { navigation } = this.props
		const { navigate } = navigation
    navigate('H1')

    // const navigateAction = NavigationActions.navigate({
		// 	routeName: 'H1',
		// 	params: {id: 'huhaoran'},
		// 	action: NavigationActions.navigate({ routeName: 'H1'})
		// })
		// this.props.navigation.dispatch(navigateAction)
  }
_renderItem = ({item}) => {
    return (
      <View style={{width: width, height: 100}} >
        <Text>{'我是自定义的' + item} </Text>
      </View>
    )
  }
  render() {
    
    console.log('====================================');
    console.log('====================================');
    return (
      <View style={styles.container}>
        <RefreshFlatList
          data={[1,2,3]}
          renderItem={this._renderItem}
          viewType={'ListView'}
        />
      </View>
    )
  }
}

const a = StackNavigator({
  Home: { screen: _App },
  H1: { screen: H1 }
})

const Home = TabNavigator({
  Home: { screen: _App },
  List: { screen: List },
  Account: { screen: Account },
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

export default _App