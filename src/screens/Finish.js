import React, { useState, useContext } from "react";

import { View, Text, StyleSheet, Animated } from "react-native";
import { useSelector } from "react-redux";

const Finish = ({}) => {
  const { username, score } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Thanks {username} your score is {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  text: {
    color: "#841584",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 100,
    fontSize: 25,
    marginTop: 250,
  },
});

export default Finish;
