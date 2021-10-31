import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  // проходим мапом по массиву из объектов. метод мап вызывается для каждого объекта в массиве
  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messagesData.map((t) => (
    <Message text={t.message} />
  ));
  // 1Message 2text={t.3 message} 1-константа, созданная в начале блока,
  // 2 -непосредственно текст сообщения, принимается в пропсах константы 1
  // 3-ключ из массива messagesData
  let newMessageBody = state.newMessageBody;
  let onMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (evt) => {
    let body = evt.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="enter your massage"
            ></textarea>
          </div>
          <div>
            <button onClick={onMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
