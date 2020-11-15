import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Spacer from "./spacer";

import { signin } from "../actions/authActions";

const AuthForm = () => {
  const dispatch = useDispatch();

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const Signin = signin(dispatch);

  return (
    <View>
      <Spacer>
        <TextInput
          style={styles.input}
          onChangeText={setUser}
          value={username}
          placeholder="Username"
        />
      </Spacer>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Signin({ username, password })}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </Spacer>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: "white",
            borderColor: "#12FD12",
            borderStyle: "solid",
            border: 10,
          },
        ]}
      >
        <Text style={[styles.buttonText, { color: "black" }]}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  button: {
    backgroundColor: "#0D6CF5",
    alignContent: "center",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
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
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default AuthForm;
