import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
/*const ThreeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to SecoundScreen
			</Text>
		</View>
	)
}*/

class ThreeScreen extends Component {
  componentDidMount() {
    console.log('====================================');
    console.log('ThreeScreen did mount');
    console.log('====================================');
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SecoundScreen
        </Text>
      </View>
    )
  }
}


ThreeScreen.navigationOptions = {
	title: 'Threen Screen Title',
  tabBarLabel: 'Account',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('./img/account.png')}
      style={[styles.icon, {tintColor: tintColor}]}
    />
  ),
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

export default ThreeScreen