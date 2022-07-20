import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const Seperator = () => <View styles={styles.separator} />;

const ButtonExample = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <View>
        <Text styles={styles.title}>
          The title and onPress handler are required. It's recommended to se
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button title="PRESS ME" onPress={()=> alert('Simple Button pressed')}/>
      </View>
      <Seperator />
      <View>
        <Text styles={styles.title}>
          The title and onPress handler are required. It's recommended to se
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button title ="PRESS ME"/>
        </View>
        <Seperator />
        <View>
        <Text styles={styles.title}>
          All interactiom for the component are diabled.
        </Text>
        <Button title="Press ME" disabled/>
        </View>
        <Seperator />
        <View>
        <Text styles={styles.title}>
          This layout strategy lets the title define the width of the button
        </Text>
        <View styles={styles.fixToText}>
        <Button title="LEFT BUTTON" onPress={()=> alert('Left Button pressed')}/>
        </View>
        </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
