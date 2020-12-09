import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux'
import store from './store/store';

import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
    
  );
}


