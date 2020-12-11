import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Ionicons} from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import HeaderImage from '../components/HeaderImage';

const ShopNavigator = createStackNavigator({
    Landing: {
        screen: ProductsOverviewScreen,
        navigationOptions:{
            headerTitle: () => <HeaderImage/>
        }
    },
    ItemPage: {
        screen: ProductDetailScreen,
        navigationOptions: ({navigation}) => {

            const data = navigation.getParam('data');
            
            return{ 
                headerTitle: data.item.title
            }
            
        }
    },
})

export default createAppContainer(ShopNavigator);