import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Stysheet from './components/Stysheet';

const App = () => {
  const showData =()=>{alert("Hello")}
  return (
    <View style={styles.container}>
      <Text> Button Example</Text>
      <Button color = 'purple' onPress={showData} title = "Click Me"/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
   
});

export default App;