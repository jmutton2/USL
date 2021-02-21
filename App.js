

import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createRootNavigator } from './UtilityTabs/Router.js';

import { NavigationContainer } from '@react-navigation/native';

import {SignedIn, SignedOut} from './UtilityTabs/Router'

import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
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
=======

//Firebase imports
//import { firebase } from './src/firebase/config';
//import {decode, encode} from 'base-64';
//if (!global.btoa) {  global.btoa = encode }
//if (!global.atob) { global.atob = decode }


>>>>>>> upstream/master

const Stack = createStackNavigator();


<<<<<<< HEAD
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
=======

export default class App extends React.Component {


  state = {
    signedIn: false,
    checkSignIn: false
  };


  componentDidUpdate() {
    this.setState({signedIn:!signedIn})
>>>>>>> upstream/master
  }


  render() {
    let initialRouteNameD = this.state.signedIn ? "SignedIn" : "SignedOut"
    const Layout = createRootNavigator(this.state.signedIn);

    //'context' >> to pass data from one screen to the next

    return ( 
          <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteNameD}>
                <Stack.Screen name="SignedIn" component={SignedIn}/>
                <Stack.Screen name="SignedOut" component={SignedOut}/>
            </Stack.Navigator>
          </NavigationContainer>

)
  }
};

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