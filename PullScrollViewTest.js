//import liraries
import React, { Component } from 'react';
import { View, ListView, Animated, Text, StyleSheet, ScrollView } from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'
// create a component
class PullScrollViewTest extends Component {
	constructor(){
		super()
		this.state = {
			fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
    };
	}
	componentDidMount() {
		setTimeout(()=> {
			Animated.spring(this.state.fadeAnim, {
				toValue: 100,
			}).start();
		},1000)
	}
	onLayout = (event) =>{
		// console.log(event.nativeEvent.layout)
	}
	onScroll = (e) => {
		// console.log(e.nativeEvent.contentOffset.y)
		// 		this._scrollView.scrollTo({y: 300, animated: true})
		
	}

	render() {
		const { fadeAnim } = this.state
		return (
			<Animated.View 
				style={{flex: 1}}
				ref={ wrapperView => { this._wrapperView = wrapperView }}
				>
				<View style={{height: 200, backgroundColor: 'yellow'}} >
					<Text>PullScrollViewTest</Text>
				</View>
				<Animated.View style={{flex: 1, marginTop: fadeAnim}} onLayout={this.onLayout}>
					<ScrollableTabView
					style={{marginTop: 20, flex: 1}}
					renderTabBar={() => <DefaultTabBar />}
					>
						<A tabLabel='Tab #1'>My</A>
						<A tabLabel='Tab #2'>My</A>
					</ScrollableTabView>
				</Animated.View>
			</Animated.View >
		);
	}
}

class A extends Component {
	constructor(){
		super()
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state ={
			dataSource: ds.cloneWithRows(Array.from({length: 10}, (v, i) => i)),
		}
	}
	renderRow = (rowData) => {
		return (
			<View style={{height: 100, backgroundColor: 'white'}} >
				<Text>{rowData}</Text>
			</View>
		)
	}
	render(){
		return(
			<ListView
			style={{flex: 1}}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
    	/>
		)
	}
}
// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c3e50',
	},
});

//make this component available to the app
export default PullScrollViewTest;
