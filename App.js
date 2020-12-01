import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Image, Button, View } from "react-native";
import "firebase/firestore";
import { Provider } from "react-redux";
import { setNavigator } from "./src/navigationRef";
import { createStore } from "redux";
import Reducer from "./src/redux/authRedux";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Signup from "./src/screens/SignupScreen";
import Welcome from "./src/screens/WelcomeScreen";
import Messages from "./src/screens/MessagesScreen";
import Profile from "./src/screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import NewPost from "./src/screens/NewPostScreen";

const store = createStore(Reducer);

const Home = createStackNavigator({
  Welcome: Welcome,
  NewPost: NewPost,
});

Home.navigationOptions = {
  tabBarIcon: <AntDesign name="home" size={24} color="black" />,
};

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    BoardingScreen: OnBoardingScreen,
    Login: LoginScreen,
    Signup: Signup,
  }),
  mainFlow: createBottomTabNavigator({
    Home: Home,
    Messages: Messages,
    Profile: Profile,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App
        ref={(navigator) => {
          setNavigator(navigator); //When we are using mixed types of navigators or any thing outside our react components
        }}
      />
    </Provider>
  );
};
