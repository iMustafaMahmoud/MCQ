import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser, check } from "../actions/authActions";
import { AntDesign } from "@expo/vector-icons";

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
    </View>
  );
};

Messages.navigationOptions = {
  tabBarIcon: <AntDesign name="inbox" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
  },
});

export default Messages;
