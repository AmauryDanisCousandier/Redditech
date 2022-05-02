/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** App.js
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import Ionicons from '@expo/vector-icons/Ionicons';

import Auth from './API';
import { MySubs } from './src/MySubs';
import { SearchScreen } from './src/Search';
import { ProfileScreen } from './src/Profile';
import { SettingsScreen } from './src/Settings'
import { SubContent } from './src/SubContent';

const API = new Auth();

export function MainTab() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'B-DEV-501-Subreddits') {
              iconName = focused ? 'ios-albums' : 'ios-albums-outline';
            } else if (route.name === 'B-DEV-501-Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            } else if (route.name === 'B-DEV-501-Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'B-DEV-501-Login') {
              iconName = focused ? 'ios-key' : 'ios-key-outline';
            } else if (route.name === 'B-DEV-501-Search') {
              iconName = focused ? 'ios-compass' : 'ios-compass-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5700', //official reddit orange hex code
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: '#bfbfbf',
          tabBarShowLabel: false,
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#FF5700',
          },
        })}
      >
        <Tab.Screen name="B-DEV-501-Profile" component={(ProfileScreen)} initialParams={{api: API}}/>
        <Tab.Screen name="B-DEV-501-Subreddits" component={(MySubs)} initialParams={{api: API}}/>
        <Tab.Screen name="B-DEV-501-Search" component={(SearchScreen)} initialParams={{api: API}}/>
        <Tab.Screen name="B-DEV-501-Settings" component={(SettingsScreen)} initialParams={{api: API}}/>
      </Tab.Navigator>
  );
}

export default function App() {
  const jsp = createStackNavigator();

  return (
    <NavigationContainer>
      <jsp.Navigator>
        <jsp.Screen options={{headerShown: false}} name='main' component={MainTab}/>
        <jsp.Screen options={{headerShown: false}} name='SubContent' component={(SubContent)} initialParams={{api: API}}/>
      </jsp.Navigator>
    </NavigationContainer>
  )
}