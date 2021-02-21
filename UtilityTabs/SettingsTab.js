import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Settings() {
    return (
      <View style={styles.butt}>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  butt: {
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Settings;