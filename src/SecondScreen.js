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
import ThreeScreen from './ThreeScreen'

class SecondScreen extends Component {
	componentDidMount() {
    console.log('====================================');
    console.log('SecondScreen did mount');
    console.log('====================================');
  }
	render () {
		const { navigate } = this.props.navigation
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

SecondScreen.navigationOptions = props => {
	return{
		title: 'Second Screen Title',
		tabBarLabel: 'List',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('./img/list.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>
		),
	}
}


const Drawer = DrawerNavigator({
  SecondScreen: { screen: SecondScreen },
}, {
	drawerWidth: 200,
  drawerPosition: 'right',
	contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
	contentOptions: {
		activeTintColor: '#e91e63',
		style: {
			marginVertical: 0,
		}
	}

})




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

export default Drawer