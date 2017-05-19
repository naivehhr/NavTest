import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Button,
	ScrollView,
	Image
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems
 } from 'react-navigation'

class List extends Component {
	componentDidMount() {
		const { navigation } = this.props
    console.log('====================================');
    console.log('SecondScreen did mount', navigation);
    console.log('====================================');
  }

	go = () => {
		const { navigation } = this.props
		const { navigate } = navigation
		navigate('L1')
	}
	render () {
		const { navigate } = this.props.navigation
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					List View
				</Text>
				<Button onPress={this.go}
					title='Next'
					/>
			</View>
		)
	}
}


/*const SecondScreen = (props) => {
	const { navigate } = props.navigation
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to SecoundScreen
			</Text>
			<Button onPress={() => navigate('DrawerOpen')}
				title='open'
				/>
		</View>
	)
}*/

/*const DrawerItems = () => {
	return (
		<View>
			<Text>123</Text>
		</View>
	)
}*/

List.navigationOptions = props => {
	return{
		title: 'List',
		tabBarLabel: 'List',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('./img/list.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>
		),
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

export default List