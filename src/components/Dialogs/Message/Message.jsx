import React from "react";
import style from "./../Dialogs.module.css";

// рендерит сообщения
const Message = (props) => {
  return <div className={style.message}>{props.text}</div>;
};

export default Message;
