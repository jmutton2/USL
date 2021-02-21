

import 'react-native-gesture-handler';
import React from 'react';

import { SwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <Tab.Screen  name="Home" component={HomeScreen1}        
                 options={{tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}/>
                <Tab.Screen  name="Settings" component={Settings}
                options={{tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                    ),
                }}/>
                <Tab.Screen  name="Profile" component={Profile}
                options={{tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="face-profile" color={color} size={size} />
                    ),
                }}/>
                <Tab.Screen  name="Courses" component={MyCourses}
                options={{tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={size} />
                    ),
                }}/>
                <Tab.Screen  name="Clubs" component={MyClubs}
                options={{tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                }}/>
                <Tab.Screen  name="Calendar" component={calendar}
                options={{tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="calendar" color={color} size={size} />
                    ),
                }}/>
            </Tab.Navigator>
        )
}

export const createRootNavigator = (signedIn = false) => {


    // return (
    //     // <NavigationContainer>
    //     //     <Stack.Navigator initialRouteName={initialRouteNameD}>
    //     //         <Stack.Screen name="SignedIn" component={SignedIn}/>
    //     //         <Stack.Screen name="SignedOut" component={SignedOut}/>
    //     //     </Stack.Navigator>
    //     // </NavigationContainer>
    // )
}

