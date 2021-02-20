import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

//Firebase imports
import { firebase } from './src/firebase/config';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

//Importing the pages
import Settings from './UtilityTabs/SettingsTab.js';
import Profile from './UtilityTabs/ProfileTab.js';
import Calendar from './UtilityTabs/CalendarTab.js';
import MyClubs from './UtilityTabs/MyClubsTab.js';
import MyCourses from './UtilityTabs/MyCoursesTab.js';
import FadeInView from './UtilityTabs/Fade.js';

const [loading, setLoading] = useState(true)
const [user, setUser] = useState(null)

function HomeScreen1() {
  return (
    <View style = {styles.container}>
      <FadeInView >
            <Text>USL</Text>
        </FadeInView>
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
        <Tab.Screen name="Home" component={HomeScreen1} />
        <Tab.Screen name="Settings" component={settingsTab} />
        <Tab.Screen name="Profile" component={profileTab} />
        <Tab.Screen name="MyCourses" component={myCoursesTab} />
        <Tab.Screen name="MyClubs" component={myClubsTab} />
    <Tab.Screen name="MyEvents" component={calendarTab} />

        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Registration" component={RegistrationScreen} />
        
  );
  if (loading) {
    return (
      <></>
    
    )
  }
  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);
}
  
export default function App() {
    
const styles = StyleSheet.create({
  container: {
    width: 350, 
    height: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'powderblue', 
    margin: 10,
    fontSize: 50,
    flex: 1, 
  } 
});

