import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { firebase } from './src/firebase/config';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import {decode, encode} from 'base-64';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

//Importing the pages
import Settings from './UtilityTabs/SettingsTab.js';
import Profile from './UtilityTabs/ProfileTab.js';
import MyEvents from './UtilityTabs/MyEventsTab.js';
import MyClubs from './UtilityTabs/MyClubsTab.js';
import MyCourses from './UtilityTabs/MyCoursesTab.js';
// import toggleCamera from'./src/screens/CameraScreen/camera.js'
import CameraApp from './src/screens/CameraScreen/camera.js'



function HomeScreen1() {
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
    < CameraApp />
    
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

const Stack = createStackNavigator();


export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [toggleCamera, setToggleCamera] = useState(true)

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen1} />
        <Tab.Screen name="Settings" component={settingsTab} />
        <Tab.Screen name="Profile" component={profileTab} />
        <Tab.Screen name="MyCourses" component={myCoursesTab} />
        <Tab.Screen name="MyClubs" component={myClubsTab} />
        <Tab.Screen name="MyEvents" component={myEventsTab} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Registration" component={RegistrationScreen} />
      </Tab.Navigator>

    </NavigationContainer>
    

    
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

