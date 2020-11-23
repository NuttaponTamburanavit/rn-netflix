import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './src/navigators/homeStack';
import ComingSoonStack from './src/navigators/comingSoonStack';
import MoreStack from './src/navigators/moreStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            // options={{
            //   tabBarLabel: 'Home',
            //   tabBarIcon: ({color, size}) =>,
            // }}
          />
          <Tab.Screen name="Coming Soon" component={ComingSoonStack} />
          <Tab.Screen name="More" component={MoreStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
