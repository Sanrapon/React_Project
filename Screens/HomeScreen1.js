import { View, Text , Button} from 'react-native'
import React from 'react'
import AboutScreen from './AboutScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <MaterialCommunityIcons name="home-assistant" size={24} color="black" />
    <Text>Home Screen</Text>
    <Button title='About Us' onPress={() => navigation.navigate('About' , {email: 'reactnative.tni.ac.th'})}/>
  </View>
  )
}

export default HomeScreen