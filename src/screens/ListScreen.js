import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 12 },
    { name: "Friend 2", age: 2 },
    { name: "Friend 3", age: 14 },
    { name: "Friend 4", age: 13 },
    { name: "Friend 5", age: 20 },
    { name: "Friend 6", age: 11 },
    { name: "Friend 7", age: 10 },
    { name: "Friend 8", age: 12 },
    { name: "Friend 9", age: 17 },
    { name: "Friend 10", age: 12 },
  ];

  return (
    <FlatList
      // horizontal
      // showsHoriontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
