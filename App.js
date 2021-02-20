import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importing the pages
import { Settings } from './UtilityTabs/SettingsTab.js';
import { Profile } from './UtilityTabs/ProfileTab.js';
import { MyEvents } from './UtilityTabs/MyEventsTab.js';
import { MyClubs } from './UtilityTabs/MyClubsTab.js';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Settings />
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here is my profile</Text>
      <Profile />
    </View>
  );
}

function MyCourses() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        List and drop down of courses, can edit picture option. 
        Can take picture from here
      </Text>
      <MyCourses/>
    </View>
  );
}

function MyClubs() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List and drop down of clubs</Text>
      <MyClubs />
    </View>
  );
}

function MyEvents() {
  return (
    <MyEvents />
  );
}


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="MyCourses" component={MyCourses} />
        <Tab.Screen name="MyClubs" component={MyClubs} />
        <Tab.Screen name="MyEvents" component={MyEvents} />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
}

export default App;