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
	DrawerItems,
	NavigationActions
 } from 'react-navigation'
class Home_2 extends Component {
	static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params && navigation.state.params.user + navigation.state.params.uid}`,
  });

	componentDidMount() {
		const { navigation } = this.props
	}

	back = () => {
		const { navigation } = this.props
		// console.log(navigation);
		navigation.goBack(null)
	}

	go = () => {
		const { navigation } = this.props
		const { navigate } = navigation
		navigate('H2', { user: 'Lucy', uid: navigation.state.params.uid + 1 })
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

// _Index.navigationOptions = props => {
// 	const {navigation} = props;
//   const {state, setParams} = navigation;
// 	return {
// 		title: 'home-2',
// 	}
// }


export default Home_2