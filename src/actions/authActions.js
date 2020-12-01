import { navigate } from "../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseConfig from "./../api/fireBase";
import firebase from "firebase";
import { useDispatch } from "react-redux";

firebase.initializeApp(firebaseConfig);

export const signup = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    navigate("mainFlow");

    //dispatch({ type: "signup", payload: response.data.token });
    //navigate("TrackList");
  } catch (err) {
    console.log(err);
  }
};

export const signin = (dispatch) => async (email, password) => {
  try {
    const setLoading = setIsLoading(dispatch);
    setLoading(true);
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("AfterSignin");
    setLoading(false);
    navigate("mainFlow");
    //await AsyncStorage.setItem("token", response.data.token);
    //dispatch({ type: "signup", payload: response.data.token });
  } catch (err) {
    console.log(err);
  }
};

export const signout = async () => {
  //await AsyncStorage.removeItem("token");
  // dispatch({ type: "signout" });
  //navigate("loginFlow");
  try {
    await firebase.auth().signOut();
    navigate("loginFlow");
  } catch (err) {
    console.log(err);
  }
};

export const setUser = (dispatch) => (user) => {
  dispatch({ type: "setUser", payload: user });
};

export const check = async () => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      SetUser(user);
    }
  });
};

export const setIsLoading = (dispatch) => (isLoading) => {
  console.log("Loading Here", isLoading);
  dispatch({ type: "updateIsLoading", payload: isLoading });
};
