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


class A1 extends Component {

	componentDidMount() {
		const { navigation } = this.props
		console.log(navigation);
	}
	
	onPress = () => {
		const { navigation } = this.props
		navigation.goBack()
	}
	render () {
		return (
			<View style={styles.container}>
				<Button onPress={this.onPress} title='Back' />
			</View>
		)
	}
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

export default A1