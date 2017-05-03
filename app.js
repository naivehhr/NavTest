//import liraries
import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	Button,
	WebView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ChatScreen from './ChatScreen'
import { MainScreenNavigator } from './TabNavigator'
// create a component
class HomeScreen extends Component {

	static navigationOptions = {
		title: 'Welcome',
		header: MyComponent
	};

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

const MyComponent = () => {
	return (
		<View style={styles.container}>
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
