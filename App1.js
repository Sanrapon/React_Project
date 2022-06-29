import { View, Text, StyleSheet,Button } from 'react-native'
import Cafe from './components/Cafe';
import Logo from './components/Logo';
const App = () => {

  const showData =()=>{
    alert("Hello Button")
  }

  return (
    <View>
    <Text>Hello React Native</Text>
    <Logo />
    <Button onPress={showData} title='Click Me'/>
    {/* <Cafe/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 20,
  },
  warning: {
    color: 'red'
  }
});
