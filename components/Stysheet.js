import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import App from '../App';

const Stysheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
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