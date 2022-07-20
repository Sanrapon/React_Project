import { StyleSheet, Text, View, Alert,Button } from 'react-native'
import React from 'react'


const AlertComponent = () => {
    const simpleAlertHanler =()=>{alert('Hello Im simple alert')}
    const twoOptionAlertHanler =()=>{Alert.alert('Hello' , 'Im two option alert from react native',[{text:'Yes',onPress: ()=> alert('Yes,Pressed')},{text:'No',onPress: ()=> alert('No,Pressed') , style:'cancel'}], {cancelable: false});}
    return (
      <View style={styles.container}>
       <Button title='SimpleAlert' onPress ={simpleAlertHanler}/>
       <Button title='Alert with Two Options' onPress ={twoOptionAlertHanler}/>
      </View>
    )
    }
    const styles = StyleSheet.create
    ({ container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'#ecf0f1',
          },
      });
      export default AlertComponent;