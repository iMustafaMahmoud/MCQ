import React from "react";
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from "../styles/FeedStyle";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const PostCard = ({ item }) => {
  likeIcon = item.liked ? "heart" : "hearto";
  likeIconColor = item.liked ? "#2e64e5" : "black";

  if (item.likes == 1) {
    likeText = "1 Like";
  } else if (item.likes > 1) {
    likeText = item.likes + " " + "Likes";
  } else {
    likeText = "Like";
  }

  if (item.comments == 1) {
    commentText = "1 Comment";
  } else if (item.likes > 1) {
    commentText = item.comments + " " + "Comments";
  } else {
    commentText = "Comment";
  }

  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg !== "none" ? (
        <PostImg source={item.postImg} />
      ) : (
        <Divider />
      )}
      {/* <PostImg source={require("../../assets/posts/post-img-1.jpg")} /> */}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <AntDesign name={likeIcon} size={20} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction>
          <EvilIcons name="comment" size={25} color="black" />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
