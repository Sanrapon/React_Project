import { StyleSheet, Text, View,
TouchableHighlight,
TouchableNativeFeedback,
TouchableOpacity,
TouchableWithoutFeedback,
SafeAreaView } from 'react-native'
import React from 'react'

const Touchable_Example = () => {
    const onPress = (msg) => {
        alert('Alert for: '+msg)
    };

  return (
    <SafeAreaView style = {{flex:1}}>
    <View style = {styles.button}>
        <TouchableNativeFeedback
        style = {styles.button}
        onPress={()=>onPress('TouchableNativeFeedback Pressed')}
        >
           
                <Text>Touchable native feedback only android</Text>
           

        </TouchableNativeFeedback>
        <TouchableHighlight>
            style = {styles.button}
            onPress = {()=>onPress('TouchableHightlight Pressed')}
            <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableOpacity>
            style = {styles.button}
            onPress = {()=>onPress('TouchableOpacity Pressed')}
            <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback>
            style = {styles.button}
            onPress = {()=>onPress('TouchableWithoutFeedback Pressed')}
            <Text>TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>


    </View>
    </SafeAreaView>
  )
}

export default Touchable_Example

const styles = StyleSheet.create({
     container: {
     flex: 1,
     alignItems: 'center',
     marginTop: 50,
     },
     button: {
     alignItems: 'center',
     backgroundColor: '#DDDDDD', //color of button
     padding: 10,
     width: 300,
     marginTop: 16,
     },
     });