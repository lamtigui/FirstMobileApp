import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Contact from "../components/Contact";
import Search from "../components/Search";

const AppTabNavigation = createMaterialTopTabNavigator(
    {
        Contact: { screen: Contact, title: "Contact" },
        Search: { screen: Search, title: 'Search' }
    },
    {
        tabBarPosition: 'top', swipeEnabled: true, animationEnabled: true,
        tabBarOptions: {
            showIcon: false, activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: { backgroundColor: '#633689', },
            labelStyle: { textAlign: 'center', },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },
        },
    }
);

const AppStackTabNavigation =createStackNavigator({
    MyTabNavigator:{
        screen:AppTabNavigation,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ac0a07',
            },
            headerTintColor: '#FFFFFF',
            title: 'Tab Navigator',
        },
    }
},);

export default createAppContainer(AppStackTabNavigation);