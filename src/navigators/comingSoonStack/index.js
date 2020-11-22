import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ComingSoon from '../../pages/comingSoon';
import DetailScreen from '../../pages/detail';

const ConmingSoonStack = createStackNavigator();

function ComingSoonStackScreen() {
  return (
    <ConmingSoonStack.Navigator>
      <ConmingSoonStack.Screen name="Coming Soon" component={ComingSoon} />
      <ConmingSoonStack.Screen name="Detail" component={DetailScreen} />
    </ConmingSoonStack.Navigator>
  );
}

export default ComingSoonStackScreen;
