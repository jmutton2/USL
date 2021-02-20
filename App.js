import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Animated,  Easing} from 'react-native'; 


function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <View style={{flexDirection: 'row', padding: 5, maxWidth: 450}}>
          <Button
            title="Set"
            onPress={() => navigation.navigate('Settings')}
          />
          <Button
            title="Prof"
            onPress={() => navigation.navigate('Profile')}
          />
          <Button
            title="My Cogit l"
            onPress={() => navigation.navigate('MyCourses')}
          />
          <Button
            title="My Cl"
            onPress={() => navigation.navigate('MyClubs')}
          />
          <Button
            title="My Ev"
            onPress={() => navigation.navigate('MyEvents')}
          />
        </View>
      </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here is my profile</Text>
    </View>
  );
}

function MyCourses() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        List and drop down of courses, can edit picture option. 
        Can take picture from here
      </Text>
    </View>
  );
}

function MyClubs() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List and drop down of clubs</Text>
    </View>
  );
}

function MyEvents() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List view of my events</Text>
    </View>
  );
}


const Stack = createStackNavigator();
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity:

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>University Student Life</Text>
      </FadeInView>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyCourses" component={MyCourses} />
        <Stack.Screen name="MyClubs" component={MyClubs} />
        <Stack.Screen name="MyEvents" component={MyEvents} />

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default App;