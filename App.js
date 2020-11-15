import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "firebase/firestore";
import Home from "./src/screens/Home";
import Info from "./src/screens/Info";
import QuizHome from "./src/screens/QuizHome";
import { setNavigator } from "./src/navigationRef";
import { createStore } from "redux";
import Reducer from "./src/redux/quizReducer";
import { Provider } from "react-redux";
import QuizScreen from "./src/screens/QuizScreen";
import Finish from "./src/screens/Finish";

const store = createStore(Reducer);
const navigator = createStackNavigator(
  {
    Home: Home,
    Info: Info,
    QuizHome: QuizHome,
    QuizScreen: QuizScreen,
    Finish: Finish,
  },
  {
    initialRouteName: "QuizHome",
    defaultNavigationOptions: {
      title: "",
    },
  }
);

const App = createAppContainer(navigator);

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
