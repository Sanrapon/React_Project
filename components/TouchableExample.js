import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView,
  } from "react-native";
  import React from "react";
  
  const TouchableExample = () => {
    const onPress = (msg) => {
      alert("Alert for:" + msg);
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style ={styles.container}>
          <TouchableNativeFeedback onPress={()=>onPress('TouchableNativeFeedback Pressed')}>
              <View style={styles.button}>
                  <Text>TouchableNativeFeedback(only android)</Text>
  
              </View>
  
          </TouchableNativeFeedback>
  
          <TouchableHighlight style={styles.button} onPress={()=>onPress('TouchableNativeFeedback Pressed')}>
                  <Text>TouchableHighlight(only android)</Text>
          </TouchableHighlight>
  
  
          <TouchableOpacity style={styles.button} onPress={()=>onPress('TouchableNativeFeedback Pressed')}>
                  <Text>TouchableOpacity(only android)</Text>
  
          </TouchableOpacity>
  
          <TouchableWithoutFeedback onPress={()=>onPress('TouchableNativeFeedback Pressed')}>
              <View style={styles.button}>
                  <Text>TouchableWithoutFeedback(only android)</Text>
  
              </View>
  
          </TouchableWithoutFeedback>
  
  
        </View>
      </SafeAreaView>
    );
  };
  
  export default TouchableExample;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: 50,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD", //color of button
      padding: 10,
      width: 300,
      marginTop: 16,
    },
  });