// //import AsyncStorage from "@react-native-async-storage/async-storage";
// import createDataContext from "./createDataContext";
// import axios from "../api/axios";
// import { navigate } from "../navigationRef";

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "signup":
//       return { token: action.payload };
//     case "signout":
//       return { token: null };
//     default:
//       return state;
//   }
// };

// const tryLocalSignin = (dispatch) => async () => {
//   const token = await AsyncStorage.getItem("token");
//   if (token) {
//     dispatch({ type: "signin", payload: token });
//     navigate("Info");
//   } else {
//     navigate("Home");
//   }
// };

// const signup = (dispatch) => async ({ username, password }) => {
//   try {
//     const response = await axios.post("/signup", { email, password });
//     await AsyncStorage.setItem("token", response.data.token);
//     dispatch({ type: "signup", payload: response.data.token });
//     navigate("TrackList");
//   } catch (err) {
//     console.log(err);
//   }
// };

// const signin = (dispatch) => async ({ username, password }) => {
//   try {
//     const response = await axios.post("/signin", { username, password });
//     await AsyncStorage.setItem("token", response.data.token);
//     dispatch({ type: "signup", payload: response.data.token });
//     const user = response.data.user;
//     console.log({ user });
//     navigate("Info", {
//       username: user.username,
//       address: user.address,
//       age: user.age,
//       diagnose: user.diagnose,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const signout = (dispatch) => async () => {
//   await AsyncStorage.removeItem("token");
//   dispatch({ type: "signout" });
//   navigate("loginFlow");
// };

// export const { Provider, Context } = createDataContext(
//   authReducer,
//   { signup, signin, tryLocalSignin },
//   { token: null }
// );
