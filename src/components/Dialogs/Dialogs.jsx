import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // проходим мапом по массиву из объектов. метод мап вызывается для каждого объекта в массиве
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map((t) => (
    <Message text={t.message} />
  ));
  // 1Message 2text={t.3 message} 1-константа, созданная в начале блока,
  // 2 -непосредственно текст сообщения, принимается в пропсах константы 1
  // 3-ключ из массива messagesData

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
