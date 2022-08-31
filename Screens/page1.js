import { View, Text , Button} from 'react-native'
import React from 'react'
import AboutScreen from './AboutScreen'
import { styles } from '../assets/style'

import page2 from './page2';
import page3 from './page3';

const page1 = ({navigation}) => {
  return (
    <View style = {styles.constainer}>
    <Text style = {styles.textTopStyle}>This is the first page</Text>
    <Button title='Go to second page' onPress={() => navigation.navigate(page2)}/>
    <Button title='Go to third page' onPress={() => navigation.navigate(page3)}/>
    <Text style = {styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
  </View>
  )
}

export default page1