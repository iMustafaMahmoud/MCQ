import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import { setUser, signup } from "../actions/authActions";
import { useSelector } from "react-redux";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
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

      <FormInput
        labelValue={confirmpassword}
        placeholderText="Confirm Password"
        onChangeText={setConfirmPassword}
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => signup(email, password)}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
          Privacy Policy
        </Text>
      </View>

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
          onPress={() => navigation.navigate("Login")}
        >
          Have an account ? Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

// SignupScreen.navigationOptions = () => {
//   return {
//     title: "",
//     headerStyle: {
//       backgroundColor: "#f9fafd",
//       shadowColor: "#f9fafd",
//       elevation: 0,
//     },
//     headerLeft: () => {
//       <View>
//         <FontAwesome.Button
//           name="long-arrow-left"
//           size={25}
//           backgroundColor="f9fafd"
//           color="#333"
//           onPress={() => navigation.navigate("Login")}
//         />
//       </View>;
//     },
//   };
// };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "grey",
  },
});

export default SignupScreen;
