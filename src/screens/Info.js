import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

const Info = ({ navigation }) => {
  const username = navigation.getParam("username");
  const address = navigation.getParam("address");
  const age = navigation.getParam("age").toString();
  const diagnose = navigation.getParam("diagnose");
  console.log("this is");
  console.log(username);
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          style={{
            height: 160,
            width: 160,
            borderRadius: 160 / 2,
            alignSelf: "center",
            overflow: "hidden",
          }}
        />
        <Text style={styles.welcome}>{username}</Text>
      </View>
      <View style={styles.two}>
        <View style={styles.labels}>
          <Text style={styles.myText}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Username"
            value={username}
          />
        </View>
        <View style={styles.labels}>
          <Text style={styles.myText}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Address"
            value={address}
          />
        </View>
        <View style={styles.labels}>
          <Text style={styles.myText}>Age</Text>
          <TextInput style={styles.input} placeholder="Your Age" value={age} />
        </View>
        <View style={styles.labels}>
          <Text style={styles.myText}>Diagnose</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Diagnosis"
            value={diagnose}
          />
        </View>
      </View>
    </View>
  );
};

Info.navigationOptions = () => {
  return {
    headerTransparent: true,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  one: {
    flex: 0.3,
    marginTop: 80,
    marginLeft: 10,
  },
  two: {
    flex: 1,
    marginTop: 150,
    backgroundColor: "#0D6CF5",
    padding: 50,
  },
  welcome: {
    fontSize: 35,
    color: "black",
    fontWeight: "bold",
    letterSpacing: -0.5,
    alignSelf: "center",
  },
  input: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    padding: 10,
    color: "black",
    marginLeft: 10,
    backgroundColor: "white",
  },
  labels: {
    flexDirection: "row",
    marginBottom: 8,
  },
  myText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    letterSpacing: -0.5,
    alignSelf: "center",
  },
});

export default Info;
