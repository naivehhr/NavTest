//import liraries
import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	Button,
	WebView,
	Animated,
	Easing
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ChatScreen from './ChatScreen'
import { MainScreenNavigator } from './TabNavigator'
// create a component
class HomeScreen extends Component {

	// static navigationOptions = {
	// 	title: 'Welcome',
	// };

	componentDidMount() {
		// console.log(this.props);
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
		);
	}
}
HomeScreen.navigationOptions = props => {
	const {navigation} = props;
  const {state, setParams} = navigation;
  const {params} = state;
	return {
		title: 'lalalla',
		headerBackTitle: 'huhaoran',
		headerTruncatedBackTitle: 'default',
		headerLeft:(
      <Button
        title={ 'edit' }
        onPress={() =>{console.log()}}
      />
    ),
		
		headerRight: (
      <Button
        title={ 'edit' }
        onPress={() =>{console.log()}}
      />
    ),
		cardStyle: { opacity: 0 },
	}
}


const MyComponent = () => {
	return (
		<View style={{ height: 50, backgroundColor: 'red'}}>
			<Text>MyComponent</Text>
		</View>
	);
};


const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen },
}, {
	mode: 'card',
  headerMode: 'screen',
	navigationOptions: {
    gesturesEnabled: true,
  },
})
const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//make this component available to the app
export default SimpleApp;
