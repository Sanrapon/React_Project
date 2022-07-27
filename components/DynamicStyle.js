import { StyleSheet, Text, View, TouchableOpacity, Image , Button , SafeAreaView } from "react-native";
import React, { useState } from "react";

const DynamicStyle = () => {

  const[defaultStyle,setDefaultStyle]= useState(true);

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style = {defaultStyle? styles.style1 :styles.style2}>
        About React
      </Text>
      <Button title='Change default style' onPress={()=> setDefaultStyle(!defaultStyle)}/>
    </View>
    </SafeAreaView>
  );
};

export default DynamicStyle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  style1: { fontSize: 20 },
  style2: { fontSize: 60, color: "red" },
});
