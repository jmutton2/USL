import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importing the pages
import Settings from './UtilityTabs/SettingsTab.js';
import Profile from './UtilityTabs/ProfileTab.js';
import Calendar from './UtilityTabs/CalendarTab.js';
import MyClubs from './UtilityTabs/MyClubsTab.js';
import MyCourses from './UtilityTabs/MyCoursesTab.js';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

//Secondary Tabs
function settingsTab() {
  return (
    //Instance of the settings function
    <Settings />
  )
}

function profileTab() {
  return (
    //Instance of the profile function
    <Profile />
  )
}

function myCoursesTab() {
  return (
    //Instance of the mycourses function
    <MyCourses />
  )
}

function myClubsTab() {
  return (
    //Instance of the myclubs function
    <MyClubs />
  )
}
function calendarTab() {
  return (
    //Instance of the calendar function
    <View style={{height: 1000, marginTop: 0}}>
      <Calendar />
    </View>
  )
}

const Tab = createBottomTabNavigator();

//Primary app container
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={settingsTab} />
        <Tab.Screen name="Profile" component={profileTab} />
        <Tab.Screen name="MyCourses" component={myCoursesTab} />
        <Tab.Screen name="MyClubs" component={myClubsTab} />
        <Tab.Screen name="MyEvents" component={calendarTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;