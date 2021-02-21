import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FadeInView from './Fade.js';

function HomeScreen1() {
  return (
    <View style={styles.mainTital} >
      <FadeInView >
        <Text style={{fontSize: 60}}>USL</Text>
      </FadeInView>
    </View>
  );
}

export default HomeScreen1;


const styles = StyleSheet.create({
  mainTital: {
    fontWeight: 'bold',
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});