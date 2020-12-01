import React from "react";
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import Splash from "../components/splash";
import PostCard from "../components/postCard";
import { Container } from "../styles/FeedStyle";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { setUser } from "../actions/authActions";

const Posts = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../../assets/users/user-3.jpg"),
    postTime: "4 mins ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/posts/post-img-3.jpg"),
    liked: true,
    likes: "14",
    comments: "5",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../../assets/users/user-1.jpg"),
    postTime: "2 hours ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "0",
    comments: "0",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../../assets/users/user-4.jpg"),
    postTime: "1 hours ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/posts/post-img-2.jpg"),
    liked: true,
    likes: "1",
    comments: "0",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../../assets/users/user-6.jpg"),
    postTime: "1 day ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/posts/post-img-4.jpg"),
    liked: true,
    likes: "22",
    comments: "4",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../../assets/users/user-7.jpg"),
    postTime: "2 days ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "0",
    comments: "0",
  },
];

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  const SetUser = setUser(dispatch);
  const User = useSelector((state) => state.user);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      SetUser(user);
      //console.log(User);
    }
  });

  return (
    <Container>
      <FlatList
        data={Posts}
        renderItem={({ item }) => <PostCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Post"
          onPress={() => navigation.navigate("NewPost")}
        >
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});

// Welcome.navigationOptions = {
//   //title: "Home",
//   tabBarIcon: <AntDesign name="home" size={24} color="black" />,
// };

export default Welcome;
