import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Inreace ${color}`} onPress={() => onIncrease()} />
      <Button title={`Dereace ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
