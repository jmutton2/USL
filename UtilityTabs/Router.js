import 'react-native-gesture-handler';
import React from 'react';

import { SwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Importing the pages
import Settings from './SettingsTab.js';
import Profile from './ProfileTab.js';
import calendar from './CalendarTab.js';
import MyClubs from './MyClubsTab.js';
import MyCourses from './MyCoursesTab.js';
import HomeScreen1 from './HomeScreen1.js';

import { LoginScreen, RegistrationScreen } from '../src/screens';
import { useState } from 'react';

const Stack = createStackNavigator();
export function SignedOut() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
    )
};
  
const Tab = createBottomTabNavigator();
export function SignedIn(props) {

        return (
            <Tab.Navigator >
                <Tab.Screen  name="Home" component={HomeScreen1} />
                <Tab.Screen  name="Settings" component={Settings}/>
                <Tab.Screen  name="Profile" component={Profile}/>
                <Tab.Screen  name="Courses" component={MyCourses}/>
                <Tab.Screen  name="Clubs" component={MyClubs}/>
                <Tab.Screen  name="Calender" component={calendar}/>
            </Tab.Navigator>
        )
}

export const createRootNavigator = (signedIn = false) => {
}

