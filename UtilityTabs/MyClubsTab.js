import * as React from 'react';
import { View, Text, Button, Alert, Image } from 'react-native';

function MyClubs() {
    return (
        <View style={{alignItems:'center',Tex}} >
          <Text style={{fontSize: 28, alignSelf: 'center', textAlign: 'center', margin: 10,flex: 1, alignItems: 'center', justifyContent: 'center',width: 250, height: 50, backgroundColor: 'powderblue'}}>Clubs</Text>
            <View style ={{paddingTop: 40, maxWidth: 150}} >
              <Button
                title="Browse Clubs"
                color="powderblue"
            
              />
            </View>
            <View style ={{paddingTop: 40, maxWidth: 150}} >
                <Button
                title="My Clubs"
                color="powderblue"
                
                />
            </View>
            <View style ={{paddingTop: 40, maxWidth: 150}} >
                <Button
                title="Upcoming Club Meets"
                color="powderblue"
                
                />
            </View>
            <View style ={{paddingTop: 40, maxWidth: 150}} >
                <Button
                title="Connect with Club Leaders"
                color="powderblue"
                
                />
            </View>

          <Text style={{fontSize: 15, textAlign: 'center', margin: 5,flex: 1, alignItems: 'center', justifyContent: 'center',width: 100, height: 15, backgroundColor: 'white'}}>Add your contact info</Text>
        </View>
    )
};

export default MyClubs;