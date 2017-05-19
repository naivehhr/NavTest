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
 
class _Index extends Component {

	componentDidMount() {
		const { navigation } = this.props
	}

	back = () => {
		const { navigation } = this.props
		// console.log(navigation);
		navigation.goBack(null)
	}

	open = () => {
		this.props.navigation.navigate('DrawerOpen');
	}

	render() {
		return(
			<View style={{  flex: 1,
    		justifyContent: 'center',
    		alignItems: 'center',
				backgroundColor: 'red'}} >
				<Button 
					title='Open'
					onPress={this.open}
				/>
			</View>
		)
	}
}

_Index.navigationOptions = props => {
	const {navigation} = props;
  const {state, setParams} = navigation;
	return{
		drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
	}
}


const Index = DrawerNavigator({
	L1: { 
		screen: _Index,
		path: 'list/:name',
		title: '123123123'
	},
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
  icon: {
    width: 24,
    height: 24,
  },
});
export default Index