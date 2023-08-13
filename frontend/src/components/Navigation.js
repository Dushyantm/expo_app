import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WatchPage from '../screens/WatchPage';
import AskPage from '../screens/AskPage';
import SearchPage from '../screens/SearchPage';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Watch" component={WatchPage} />
        <Tab.Screen name="Ask" component={AskPage} />
        <Tab.Screen name="Search" component={SearchPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
