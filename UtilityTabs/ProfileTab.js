import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, YellowBox, Button } from 'react-native';


function profile() {

    return (
        <View>
        <View style={{ flex: 1}}>
          <View style={styles.container}>
            <Image
              style={styles.profilePic}
              source={require('../assets/default_profile.png')}
            /> 
            <Text style={{ fontSize: 40 }}>Name</Text>
            <Text style={{ fontSize: 13, paddingLeft:30, paddingRight:30 }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. 
            "</Text>
        </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-end'}}>
            <Image style={styles.settingsBut} source={require('./cog_dark.png')} />
          </View>
        </View>
      </View>
    )
}

export default profile;


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    borderRadius:100,
    borderWidth:2,
    borderColor: "powderblue",
    width: 200,
    height: 200,
  },
  settingsBut:{
    marginTop:10,
    marginRight:10,
    width: 40,
    height: 40,
  },
  online:{
    position: 'absolute',
    left:210,
    top: 190,
  }
});