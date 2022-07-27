import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Separtor = () => <View style={styles.buttonIconSepartorStyle} />;

const TouchablePractice = () => {
  return (
    <View style={styles.container}>
    <View style={styles.containerSize}>
    
    <TouchableOpacity>

    <View style={styles.buttonFacebookStyle}>
    <View>
        <Image source={require("../assets/facebook.png")}style={styles.butttonImageIconStyle}/>
    </View>
    <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
    </View>
    </TouchableOpacity>


    
    <View>
        
    <TouchableOpacity>
    <View style={styles.buttonGPlusStyle}>
    <View>
    <Image source={require("../assets/google-plus.png")}style={styles.butttonImageIconStyle}/></View>
    <Text style={styles.buttonTextStyle}>
        Login Using Google Plus
    </Text>
    </View>
    </TouchableOpacity>
    </View>

    </View>
    </View>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  containerSize: {
    width: 250,
  },
  buttonGPlusStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#27EB44",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B327EB",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  butttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSepartorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
});