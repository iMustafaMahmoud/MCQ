import React, { useState, useContext } from "react";
import Questions from "../components/questions";

import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const QuizScreen = ({ navigation }) => {
  const username = useSelector((state) => state.username);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {username}</Text>
      <Questions />
    </View>
  );
};

QuizScreen.navigationOptions = () => {
  return {
    headerTransparent: true,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 100,
    fontSize: 30
  },
});

export default QuizScreen;
