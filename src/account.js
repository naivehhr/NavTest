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
	DrawerItems,
	NavigationActions
 } from 'react-navigation'

import A1 from './account-1'

/*const ThreeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to SecoundScreen
			</Text>
		</View>
	)
}*/

class Account extends Component {
  componentDidMount() {
    console.log('====================================');
    console.log('ThreeScreen did mount');
    console.log('====================================');
  }

  onPress = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'A1', //注册在跟容器中
      params: {name: 'huhaorna'},
      // 这个什么作用
      action: NavigationActions.navigate({ routeName: 'L1'})
    })

    const resetAction = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    })

    // const setParamsAction = NavigationActions.setParams({
    //   params: { title: 'Hello' },
    //   key: 'screen-123',
    // })
    this.props.navigation.dispatch(resetAction)
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SecoundScreen
        </Text>
        <Button onPress={this.onPress} title='GO' />
      </View>
    )
  }
}


Account.navigationOptions = {
	title: 'Account',
  tabBarLabel: 'Account',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('./img/account.png')}
      style={[styles.icon, {tintColor: tintColor}]}
    />
  ),
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default Account