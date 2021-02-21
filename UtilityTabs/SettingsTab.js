import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function Settings() {
    return ( 
    <View style={{alignItems:'center'}}>

      <Text style={{fontSize: 28, alignSelf: 'center', textAlign: 'center', margin: 10,flex: 1, alignItems: 'center', justifyContent: 'center',width: 250, height: 50, backgroundColor: 'powderblue'}}>Settings</Text>
      <View style ={{paddingTop: 30, maxWidth: 150}} >
        <Button
        title="Edit Profile Picture"
        color="powderblue"
        />
      </View>
      <View style ={{paddingTop: 30, maxWidth: 150}} >
        <Button
        title="Edit Bio"
        color="powderblue"
        />
      </View>
      <View style ={{paddingTop: 50, maxWidth: 150}} >
        <Button
        title="Sign Out"
        color="powderblue"
        />
      </View>
  </View>
)
    
}

export default Settings;