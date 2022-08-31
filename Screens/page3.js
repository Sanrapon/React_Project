import { View, Text , Button} from 'react-native'
import React from 'react'
import AboutScreen from './AboutScreen'
import page1 from './page1'
import page2 from './page2'
import { styles } from '../assets/style'

const page3 = ({navigation}) => {
  return (
    <View style = {styles.constainer}>
    <Text style = {styles.textTopStyle}>This is the third page</Text>
    <Button title='Go to first page' onPress={() => navigation.navigate(page1)}/>
    <Button title='Go to second page' onPress={() => navigation.navigate(page2)}/>
    <Text style = {styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
  </View>
  )
}

export default page3