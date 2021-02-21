import * as React from 'react';
import { View, Text, Button, Alert, Image } from 'react-native';

function MyClubs() {
    return (
        <View >

          <Text style={{fontSize: 28, alignSelf: 'center', textAlign: 'center', margin: 10,flex: 1, alignItems: 'center', justifyContent: 'center',width: 250, height: 50, backgroundColor: 'powderblue'}}>Clubs!</Text>
          <Button 
          title="Browse Clubs"
          color="blue"
          onPress={()=> Alert.alert('Redirecting to your schools clubs')}
          />
          <Button 
          title="My Clubs"
          color="green"
          onPress={()=> Alert.alert('Redirecting to your clubs')}
          />
          <Button 
          title="Upcoming Club meets"
          color="aqua"
          onPress={()=> Alert.alert('Redirecting to your club meetings')}
          />
          <Button
          title= "Connect with Club leaders "
          borderColor= "black"
          position= 'absolute' 
        
          onPress={()=> Alert.alert('')}
          />
<Text style={{fontSize: 15, textAlign: 'center', margin: 5,flex: 1, alignItems: 'center', justifyContent: 'center',width: 100, height: 15, backgroundColor: 'white'}}>Add your contact info</Text>
      </View>
    )
};

export default MyClubs;