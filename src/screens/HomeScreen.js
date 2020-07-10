import React from "react";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Button title="Go to Components" onPress={() => navigate("Components")} />
      <Button title="Go to List" onPress={() => navigate("List")} />
      <Button title="Go to Image" onPress={() => navigate("Image")} />
      <Button title="Go to Counter" onPress={() => navigate("Counter")} />
      <Button title="Go to Colors" onPress={() => navigate("Colors")} />
      <Button title="Go to Square" onPress={() => navigate("Square")} />
      <Button title="Go to Text" onPress={() => navigate("Text")} />
      <Button title="Go to Box" onPress={() => navigate("Box")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

{
  /* <TouchableOpacity onPress={() => navigation.navigate("List")}>
  <Text>Go to List Demo</Text>
</TouchableOpacity> */
}
