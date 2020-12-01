import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import { signin } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { setUser, setIsLoading } from "../actions/authActions";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, user } = useSelector((state) => state);
  // const SetUser = setUser(useDispatch());

  const Signin = signin(useDispatch());
  // const setLoading = setIsLoading(useDispatch());
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log("BARA");
  //     if (user) {
  //       SetUser(user);
  //       setLoading(false);
  //       console.log("GOWA", user);
  //     }
  //   });
  // }, [isLoading]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/rn-social-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>RN Social App</Text>
      <FormInput
        labelValue={email}
        placeholderText="Email"
        onChangeText={setEmail}
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        placeholderText="Password"
        onChangeText={setPassword}
        iconType="lock"
        secureTextEntry={true}
      />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {!isLoading && (
        <FormButton
          buttonTitle={isLoading ? "Loading" : "Sign In"}
          onPress={() => {
            // setLoading(true);
            Signin(email, password);
          }}
          disabled={isLoading}
        />
      )}
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText} onPress={() => {}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity style={styles.forgotButton}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Signup")}
        >
          Don't have an account ? Click here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Login.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});

export default Login;
