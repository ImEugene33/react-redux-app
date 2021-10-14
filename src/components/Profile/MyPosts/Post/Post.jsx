import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPTZvHXqUKrFwXtWTABC_5Lt6DC1u4x2vag&usqp=CAU"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>{props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
