import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPlay,
  faCloudDownloadAlt,
} from '@fortawesome/free-solid-svg-icons';

import HomeStack from './src/navigators/homeStack';
import ComingSoonStack from './src/navigators/comingSoonStack';
import MoreStack from './src/navigators/moreStack';

const Tab = createBottomTabNavigator();

// Black #221f1f
// Red  #e50914
// White #f5f5f1
export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: {backgroundColor: '#221f1f', padding: 10},
            labelStyle: {fontSize: 12},
            activeTintColor: '#fff',
            inactiveTintColor: '#ddd',
            style: {height: 100},
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesomeIcon icon={faHome} style={{color}} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Coming Soon"
            component={ComingSoonStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesomeIcon
                  icon={faPlay}
                  style={{color}}
                  size={size - 4}
                />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={MoreStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesomeIcon
                  icon={faCloudDownloadAlt}
                  style={{color}}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
