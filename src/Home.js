import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  NativeModules,
  Dimensions
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems,
  NavigationActions,
  addNavigationHelpers
 } from 'react-navigation'

const {height, width} = Dimensions.get('window');
import List from './list'
import Account from './account'
import H1 from './home-1';
import Tav from './tab'
import RefreshFlatList, { RefreshState, ViewType } from 'react-native-refreshflatlist'
class _App extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const _title = state.params? state.params.customerTitle: '1'
    return {
      title: _title
    };
  };

  // static navigationOptions = {
  //   tabBarVisible: true,
  //   title: 'Home Screen',
  //   tabBarLabel: 'Home',
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('./img/home.png')}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // }

  componentDidMount() {
    // this.props.navigation.setParams({customerTitle: 'CustomerTitle'})
    // console.log('111', this.props)
  }

  componentWillUnmount () {
    // console.log('====================================');
    // console.log('Home will unmount');
    // console.log('====================================');
  }
  

  goTo = () => {
    const { navigation } = this.props
		const { navigate } = navigation
    navigate('L1')
    console.log('123')
    // const navigateAction = NavigationActions.navigate({
		// 	routeName: 'H1',
		// 	params: {id: 'huhaoran'},
		// 	action: NavigationActions.navigate({ routeName: 'H1'})
		// })
		// this.props.navigation.dispatch(navigateAction)
  }
  _renderItem = ({item}) => {
    return (
      <View style={{width: width, height: 100}} >
        <Text>{'我是自定义的' + item} </Text>
      </View>
    )
  }

  goBack = () => {
    const { goBack, state } = this.props.navigation;
    // let k = state.params._key
    goBack('Home1')
    // goBack({ routeName: 'Home' });
    // const navigateAction = NavigationActions.navigate({
    //   routeName: 'Home',
    //   params: {},
    //   // navigate can have a nested navigate action that will be run inside the child router
    //   action: NavigationActions.navigate({ routeName: 'Home'})
    // })
    // this.props.navigation.dispatch(navigateAction)

    // const backAction = NavigationActions.back({
    //   key: state.key
    // })
    // this.props.navigation.dispatch(backAction)

    // const resetAction = NavigationActions.reset({
    //   index: 2,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Home'}),
    //     NavigationActions.navigate({ routeName: 'Home1'}),
    //     NavigationActions.navigate({ routeName: 'Home11'}),
    //     NavigationActions.navigate({ routeName: 'Home111'})
    //   ]
    // })
    // this.props.navigation.dispatch(resetAction)


    const backAction = NavigationActions.back({
      key: 'Home',
      // params: { callback(this.accesstoken) },
    });
  }
  render() {
    // console.log('====================================');
    // console.log(this.props)
    // console.log('====================================');
    const { navigation } = this.props
    const {state, setParams, goBack} = navigation;
    const _title = state.params? state.params.customerTitle: '1'
    return (
      <View style={styles.container}>
        <Button 
          onPress={() => this.props.navigation.navigate('Home'+_title, {customerTitle: _title + 1, _key: state.key})}
          title='go'
        />
        <Button 
          onPress={this.goBack}
          title='back'
        />
      </View>
    )
  }
}
const Home = StackNavigator({
  Home: { screen: _App },
  Home1: { screen: _App },
  Home11: { screen: _App },
  Home111: { screen: _App },

  // List: { screen: List },
  // Account: { screen: Account },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default Home