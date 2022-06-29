import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Stysheet from './components/Stysheet';
import User from './components/User';

const App = () => {
  return (
    <View >
    <Logo />
    <Button title = "Hello"/>
    <User />
    </View>
  )
}

export default App