import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser, check } from "../actions/authActions";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/rn-social-logo.png")} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  text: {
    fontSize: 25,
  },
});

export default Splash;
