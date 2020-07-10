import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box 1</Text>
      <Text style={styles.textStyle}>Box 2</Text>
      <Text style={styles.textStyle}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textStyle: {
    borderColor: "red",
    borderWidth: 3,
    // flex: 1,
    // textAlign: "center",
    // alignSelf: "center",
  },
});

export default BoxScreen;
