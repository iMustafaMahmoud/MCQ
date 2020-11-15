import React, { useState, useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AuthForm from "../components/AuthForm";
import { linear } from "react-native/Libraries/Animated/src/Easing";
import { Context as AuthContext } from "../context/authContext";

const spinValue = new Animated.Value(0);

// First set up animation
Animated.timing(spinValue, {
  toValue: 1,
  duration: 3000,
  easing: linear, // Easing is an additional import from react-native
  useNativeDriver: true, // To make use of native driver for performance
}).start();

// Next, interpolate beginning and end values (in this case 0 and 1)
const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"],
});

const Home = () => {
  //const { signin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.containerone}>
        <View style={styles.boxtwo}>
          <Text style={styles.name}>Golden Smile</Text>
        </View>
        <View style={styles.boxthree}>
          <Animated.Image
            source={require("../../assets/tooth.png")}
            style={{
              height: 100,
              width: 100,
              alignSelf: "center",
              tintColor: "white",
              transform: [{ rotate: spin }],
            }}
          />
        </View>
      </View>
      <View style={styles.containertwo}>
        <AuthForm />
      </View>
    </View>
  );
};

Home.navigationOptions = () => {
  return {
    headerTransparent: true,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D6CF5",
  },
  containerone: {
    flex: 1,
  },
  containertwo: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  boxtwo: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  boxthree: {
    flex: 0.5,
    marginTop: -20,
  },
  name: {
    fontSize: 45,
    color: "#FFF",
    fontWeight: "bold",
    letterSpacing: -0.5,
    marginTop: 10,
  },
});

export default Home;
