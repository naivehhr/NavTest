import React from 'react';
import {
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    TouchableHighlight,

} from 'react-native';

import {
    createNavigator,
    createNavigationContainer,
    TabRouter,
    addNavigationHelpers,
} from 'react-navigation';

//导入界面
import Home from './home';
import Find from './home-1';
import Me from './home-2';

const {width,height} = Dimensions.get('window');


//设置每个标签
const CustomTabBar = ({
    navigation
}) => {
    console.log('TabBar navigation ============'+ navigation.state.index);

    const {routes} = navigation.state;
    let selectedIndex = navigation.state.index;
    let isSelected = false;

    return (

        <View style={styles.tabContainer}>
            {
                routes.map((route,index) =>{

                    //如果当前选中该index的router
                    selectedIndex === index?isSelected = true:isSelected = false;

                    //显示不同外观
                    let textColor = isSelected?'blue':'gray';

                    return (
                        <TouchableOpacity
                            onPress={() => {
                          navigation.navigate(route.routeName);
                      }}
                            key={route.routeName}
                            style={styles.tab}
                        >
                            <Text style={{color:textColor,fontSize:12}}>{route.routeName}</Text>
                        </TouchableOpacity>
                    )
                })}
        </View>
    );
};

//设置TabBar
const CustomTabView = ({
    router,
    navigation
}) => {
    console.log('navigation ============>>>>>'+ navigation.state.index);

    const {routes,index} = navigation.state;
    const ActiveScreen = router.getComponentForState(navigation.state);

    return (
        <View style={styles.container}>
            <ActiveScreen
                navigation={addNavigationHelpers({
                    ...navigation,
                    state:routes[index],
                    })}
            />
            <CustomTabBar navigation={navigation}/>

        </View>
    );
};

//自定义导航路由
const CustomTabRouter = TabRouter({

        Home:{
            screen:Home,
        },
        Me:{
            screen:Me,
        },
        Find:{
            screen:Find,
        },
    },                   {
        initialRouteName:'Home'
    }
);

//创建自定义TabBar
const CustomTabs = createNavigationContainer(createNavigator(CustomTabRouter)(CustomTabView));

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center'
    },
    tabContainer: {
        flexDirection: 'row',
        height: 48,
        borderTopWidth:1,
        borderColor:'lightgray'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    }
});


export default CustomTabs;