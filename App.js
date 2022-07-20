import { StyleSheet, Text, View , Button, TextInputComponent} from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Stysheet from './components/Stysheet';
import UserNamePassword from './components/UserNamePassword'

const [testInputEmail , setTextInputEmail,textInputUsername , setTextInputUsername] = useState('')

const App = () => {
  return (
    <View >
    <TextInput placeholder = "Username" onChangeText = {(value)=>setTextInputUsername(value)} />
    <TextInput placeholder = "Email" onChangeText = {(value)=>setTextInputEmail(value)} />
    <Button title = "Submit" onPress = {checkTextInput}/>
    </View>
  )
}
conststyles = StyleSheet.create
({ container: {
      flex: 1,
      padding: 35,
      },
    textInputStyle: {
      width: '100%',
      height: 40,
      borderRadius: 6,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      marginTop: 15,
    },
  });
  export default App;