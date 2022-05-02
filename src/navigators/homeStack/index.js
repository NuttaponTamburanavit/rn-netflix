import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../pages/home';
import DetailScreen from '../../pages/detail';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
