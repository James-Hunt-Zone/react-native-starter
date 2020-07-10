import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const showError = name.length > 0 && name.length < 5;

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        onChangeText={(newValue) => setName(newValue)}
      />

      <Text style={styles.textBody}>My Name is: {name}</Text>

      {showError && <Text style={styles.textError}>The name to short</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  textBody: {
    margin: 15,
  },
  textError: {
    margin: 15,
    color: "red",
  },
});

export default TextScreen;
