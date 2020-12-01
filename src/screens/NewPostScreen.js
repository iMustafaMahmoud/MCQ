import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import {
  InputWrapper,
  InputField,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
} from "../styles/NewPost";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from "firebase";
// import firebaseConfig from "./../api/fireBase";

// firebase.initializeApp(firebaseConfig);

const NewPost = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const takePhotoFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      setImage(data);
      console.log(data);
      console.log(image);
    } else {
      Alert.alert("You need to give up permission to work");
    }
  };

  const ChoosePhotoFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      setImage(data);
      console.log(data);
    } else {
      Alert.alert("You need to give up permission to work");
    }
  };

  const submitPost = async () => {
    const uploadUri = image;
    console.log("here", image);
    let filename = "first";
    try {
      await firebase.storage().ref(filename).put(uploadUri);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <InputWrapper>
        {image !== null ? <AddImage source={{ uri: image.uri }} /> : null}
        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
        />
        <SubmitBtn onPress={submitPost}>
          <SubmitBtnText>Post</SubmitBtnText>
        </SubmitBtn>
      </InputWrapper>
      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}
        >
          <Icon name="md-camera" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose photo"
          onPress={ChoosePhotoFromCamera}
        >
          <Icon name="md-image" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

NewPost.navigationOptions = {
  headerRight: () => {
    return (
      <View style={{ paddingRight: 8 }}>
        <TouchableOpacity>
          <Text style={{ color: "#2e64e5", fontSize: 15 }}>Post</Text>
        </TouchableOpacity>
      </View>
    );
  },
  title: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewPost;
