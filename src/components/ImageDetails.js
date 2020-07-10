import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ImageDetails = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
