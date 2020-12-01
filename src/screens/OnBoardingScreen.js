import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useSelector } from "react-redux";

import firebase from "firebase";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.replace("Login")}
      onSkip={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../assets/onboarding-img1.png")} />,
          title: "Connet To The World",
          subtitle: "A New Way To Connect To The World",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../../assets/onboarding-img2.png")} />,
          title: "Share Your Favorites",
          subtitle: "Share Your Thoughts with Similar Kind of People",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Become The Star",
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  );
};

OnBoardingScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

export default OnBoardingScreen;
