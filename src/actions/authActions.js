import React from "react";
import { navigate } from "../navigationRef";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../api/axios";

export const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Info");
  } else {
    navigate("Home");
  }
};

export const signup = (dispatch) => async ({ username, password }) => {
  try {
    const response = await axios.post("/signup", { email, password });
    //await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    console.log(err);
  }
};

export const signin = (dispatch) => async ({ username, password }) => {
  try {
    const response = await axios.post("/signin", { username, password });
    //await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    const user = response.data.user;
    console.log({ user });
    navigate("Info", {
      username: user.username,
      address: user.address,
      age: user.age,
      diagnose: user.diagnose,
    });
  } catch (err) {
    console.log(err);
  }
};

export const signout = (dispatch) => async () => {
  //await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};
