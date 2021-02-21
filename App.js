import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createRootNavigator } from './UtilityTabs/Router.js';
import { NavigationContainer } from '@react-navigation/native';
import {SignedIn, SignedOut} from './UtilityTabs/Router'
import { createStackNavigator } from '@react-navigation/stack';

//Firebase imports
//import { firebase } from './src/firebase/config';
//import {decode, encode} from 'base-64';
//if (!global.btoa) {  global.btoa = encode }
//if (!global.atob) { global.atob = decode }



const Stack = createStackNavigator();



export default class App extends React.Component {


  state = {
    signedIn: false,
    checkSignIn: false
  };


  componentDidUpdate() {
    this.setState({signedIn:!signedIn})
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