import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser, check } from "../actions/authActions";
import { AntDesign } from "@expo/vector-icons";
import FormButton from "../components/FormButton";
import { signout } from "../actions/authActions";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <FormButton buttonTitle="Sign Out" onPress={() => signout()} />
    </View>
  );
};

Profile.navigationOptions = {
  tabBarIcon: <AntDesign name="profile" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
  },
});

export default Profile;
