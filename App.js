import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importing the pages
import Settings from './UtilityTabs/SettingsTab.js';
import Profile from './UtilityTabs/ProfileTab.js';
import MyEvents from './UtilityTabs/MyEventsTab.js';
import MyClubs from './UtilityTabs/MyClubsTab.js';
import MyCourses from './UtilityTabs/MyCoursesTab.js';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function settingsTab() {
  return (
    <Settings />
  )
}

function profileTab() {
  return (
    <Profile />
  )
}

function myCoursesTab() {
  return (
    <MyCourses />
  )
}

function myClubsTab() {
  return (
    <MyClubs />
  )
}
function myEventsTab() {
  return (
    <MyEvents />
  )
}



const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={settingsTab} />
        <Tab.Screen name="Profile" component={profileTab} />
        <Tab.Screen name="MyCourses" component={myCoursesTab} />
        <Tab.Screen name="MyClubs" component={myClubsTab} />
        <Tab.Screen name="MyEvents" component={myEventsTab} />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
}

export default App;