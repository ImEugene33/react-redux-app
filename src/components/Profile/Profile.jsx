import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // выносим постДата выше по иерархии и прокидываем их в пропсы в профайл
  // let postsData = [
  //   { id: 1, message: "Hi, that is my first post", likesCount: "♥ 10 " },
  //   { id: 2, message: "I was launch my spaceship", likesCount: "♥ 15 " },
  //   { id: 3, message: "Tesla is the best e-car", likesCount: "♥ 100 " },
  // ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
