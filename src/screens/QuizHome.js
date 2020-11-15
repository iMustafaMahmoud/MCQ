import React, { useState, useContext} from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { enterUser } from "../actions/quizActions";
import { useDispatch } from "react-redux";

const QuizHome = ({ navigation }) => {
  const [user, setUser] = useState("");
  const EnterUser = enterUser(useDispatch());

  const userHandler = (value) => {
    EnterUser(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerone}>
        <View style={styles.boxtwo}>
          <Text style={styles.name}>Enter Your Name</Text>
        </View>
      </View>
      <View style={styles.containertwo}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          onChangeText={userHandler}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("QuizScreen")}
        >
          <Text style={styles.buttonText}>Enroll</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

QuizHome.navigationOptions = () => {
  return {
    headerTransparent: true,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#841584",
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
  input: {
    height: 50,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    alignSelf: "center",
    alignContent: "center",
    padding: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#841584",
    alignContent: "center",
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default QuizHome;
