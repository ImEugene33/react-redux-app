import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({
      type: "ADD-POST",
    });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={style.postsBlock}>
      <div className={style.newPost}>
        <h3>My post</h3>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
