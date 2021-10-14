import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

// рендерит пользователей {"/dialogs/" + props.id} - конкатенация,
// добавляет к эндпоинту номер порядковый по айди из dialogsData
const DialogItem = (props) => {
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
