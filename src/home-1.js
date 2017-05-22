import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Button,
	ScrollView,
	Image,
	Platform,
	Animated,
	Easing
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
				<Image 
				style={{width: 100, height: 100}}
        source={require('./img/home.png')}/>
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
	transitionConfig: () => ({
    transitionSpec: {
      duration: 250,
      easing: Easing.linear,
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
			// console.log('====================================');
			// console.log(sceneProps);
			// console.log('====================================');
      const { index } = scene

      const height = layout.initHeight
			const width = layout.initWidth
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      })
			const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      })
			
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 0.5, 1],
      })

      return { opacity, transform: [] }
    },
  }),
	onTransitionStart: () => {
		console.log('123')
	}
})

export default Index