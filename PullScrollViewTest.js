//import liraries
import React, { Component } from 'react';
import { 
	View, 
	ListView, 
	Animated, 
	Text, 
	StyleSheet, 
	ScrollView,
	PanResponder
 } from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'
// create a component
class PullScrollViewTest extends Component {
	constructor(){
		super()
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			pan: new Animated.ValueXY(),
			dataSource: ds.cloneWithRows(Array.from({length: 10}, (v, i) => i)),
		};
		this.mo = true
		this.y = 200
		this.scrollEnable = false
		this.beforePosition = 0
	}
	componentDidMount() {
		// setTimeout(()=> {
		// 	Animated.spring(this.state.fadeAnim, {
		// 		toValue: 100,
		// 	}).start();
		// },1000)
	}
	componentWillMount() {
    this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (event, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			// onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: (event, gestureState) => {
				console.log('上部')
      },
      onPanResponderMove: (event, gestureState) => {
				// console.log('sssss', gestureState.dy)
				// let dy = gestureState.dy
				// if(dy >= 0 && this.y >= 200) {
				// 	return
				// }
				// this.state.fadeAnim.setValue(dy)
      },
      onPanResponderRelease: (event, gestureState) => {
      }
		})
		
		this._panResponder1 = PanResponder.create({
			onStartShouldSetPanResponder: (event, gestureState) => true,
			// onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			// onMoveShouldSetPanResponder: (evt, gestureState) => true,
			// onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			// onPanResponderTerminationRequest: (evt, gestureState) => true,
			
      onPanResponderGrant: (event, gestureState) => {
				console.log('内部')
      },
      onPanResponderMove: (event, gestureState) => {
				console.log('sssss1111')
      },
      onPanResponderRelease: (event, gestureState) => {
      }
		})

		this._panResponder2 = PanResponder.create({
			onStartShouldSetPanResponder: (event, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (event, gestureState) => {
				console.log('列表')
      },
      onPanResponderMove: (event, gestureState) => {
				let dy = gestureState.dy
				console.log('dy', dy)
				// console.log('currentPosition', this.currentPosition)
				// 这个位置啊，不在状态，等会在搞。。。。
				let newy = this.beforePosition + dy
				console.log('newy', newy)
				if(newy  < -180) { // 控制顶部
					// 这个冬天设置是否可以滑动啊
					// this._list1.setNativeProps({
					// 	scrollEnabled: true
					// })
					return
				}
				this.state.pan.setValue({x: 0, y: newy });
				this.beforePosition = newy
				
      },
      onPanResponderRelease: (event, gestureState) => {
      }
    })
  }

	onLayout = (event) =>{
		// console.log(event.nativeEvent.layout)
		this.y = event.nativeEvent.layout.y
	}
	onScroll = (e) => {
		// console.log(e.nativeEvent.contentOffset.y)
		// 		this._scrollView.scrollTo({y: 300, animated: true})
		
	}


	listScroll = (e) => {
		let { y } = e.nativeEvent.contentOffset
		if(y <= 0) return 
		if(y >= 200) 
			this.state.fadeAnim.setValue(-200)
		else 
			this.state.fadeAnim.setValue(-y)
	}

	renderRow = (rowData) => {
		return (
			<View key={rowData} style={{height: 100, backgroundColor: 'white'}} >
				<Text>{rowData}</Text>
			</View>
		)
	}
	render() {
		const { fadeAnim } = this.state
		return (
			<View 
				style={{flex: 1}}
				ref={ wrapperView => { this._wrapperView = wrapperView }}
				>
				<Animated.View 
					{...this._panResponder.panHandlers}
					style={{height: 200, backgroundColor: 'yellow'}} >
					<Text>PullScrollViewTest</Text>
				</Animated.View>
				<Animated.View 
					style={[this.state.pan.getLayout(), {flex: 1}]} 
					onLayout={this.onLayout}
				>
					<ScrollableTabView
						style={{flex: 1}}
						renderTabBar={() => <DefaultTabBar />}>
						<ListView
							ref={ list => { this._list1 = list }}
							{...this._panResponder2.panHandlers}
							tabLabel='Tab #1'
							style={{flex: 1}}
							dataSource={this.state.dataSource}
							renderRow={this.renderRow}
							
							scrollEnabled={false}
						/>
					</ScrollableTabView>
				</Animated.View>
			</View >
		);
	}
}

/**
 * <ScrollableTabView
						style={{flex: 1}}
						renderTabBar={() => <DefaultTabBar />}>
						<A tabLabel='Tab #1'>My</A>
						<A tabLabel='Tab #2'>My</A>
					</ScrollableTabView>
 */
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
			{...this.props}
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
