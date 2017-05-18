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

export default class Index extends Component {

	render() {
		const { navigation } = this.props
		return(
			<View style={{  flex: 1,
    		justifyContent: 'center',
    		alignItems: 'center',
				backgroundColor: 'red'}} >
				<Button 
					title='Back'
					onPress={() => navigation.goBack()}
				/>
			</View>
		)
	}
}