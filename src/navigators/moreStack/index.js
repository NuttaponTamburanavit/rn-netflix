import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MoreScreen from '../../pages/more';
import DetailScreen from '../../pages/detail';

const MoreStack = createStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="Home" component={MoreScreen} />
      <MoreStack.Screen name="Detail" component={DetailScreen} />
    </MoreStack.Navigator>
  );
}

export default MoreStackScreen;
