import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import page1 from './Screens/page1';
import page2 from './Screens/page2';
import page3 from './Screens/page3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle:{backgroundColor:'#0CA0FF'},headerTintColor:'#0CFF4B',headerTitleStyle:{fontWeight:'bold',fontSize:30}}}>
        <Stack.Screen name='page1' component={page1}/>
        <Stack.Screen name='page2' component={page2}/>
        <Stack.Screen name='page3' component={page3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}