import { View, Text , Button} from 'react-native'
import React from 'react'
import AboutScreen from './AboutScreen'
import page1 from './page1'
import page3 from './page3'
import { styles } from '../assets/style'

const page2 = ({navigation}) => {
  return (
    <View style = {styles.constainer}>
    <Text style = {styles.textTopStyle}>This is the second page</Text>
    <Button title='Go to first page' onPress={() => navigation.navigate(page1)}/>
    <Button title='Go to third page' onPress={() => navigation.navigate(page3)}/>
    <Text style = {styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
  </View>
  )
}

export default page2