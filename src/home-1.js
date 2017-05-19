import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Button,
	ScrollView,
	Image,
	Platform
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems,
	NavigationActions
 } from 'react-navigation'
import H2 from './home-2'
class _Index extends Component {

	componentDidMount() {
		const { navigation } = this.props
		console.log(navigation);
	}

	back = () => {
		const { navigation } = this.props
		// console.log(navigation);
		navigation.goBack(null)
	}

	go = () => {
		const { navigation } = this.props
		const { navigate } = navigation
		navigate('H2', { user: 'Lucy', uid: 1 })
	}

	render() {
		return(
			<View style={{  flex: 1,
    		justifyContent: 'center',
    		alignItems: 'center',
				backgroundColor: 'red'}} >
				<Button 
					title='Next'
					onPress={this.go}
				/>
			</View>
		)
	}
}

_Index.navigationOptions = props => {
	const {navigation} = props;
  const {state, setParams} = navigation;
	if(Platform.OS == 'ios'){
		return {
			title: 'H1',
			headerLeft:(
				<Button
					title={ '< Back' }
					onPress={() =>{ navigation.goBack(null) }}
				/>
			),
		}
	} else {
		return {
			title: 'H1',
		}
	}
}

const Index = StackNavigator({
	H1: { 
		screen: _Index,
		path: 'people/:name',
	},
	H2: {screen: H2}
}, {
	headerMode: 'float',
})

export default Index