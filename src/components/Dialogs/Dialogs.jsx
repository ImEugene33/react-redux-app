import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {AddMessageFormRedux} from './Message/AddMessageForm';


const Dialogs = (props) => {
    let state = props.messagesPage;

    // проходим мапом по массиву из объектов. метод мап вызывается для каждого объекта в массиве
    let dialogsElements = state.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id}/>
    ));
    let messagesElements = state.messagesData.map((t) => (
        <Message text={t.message}/>
    ));
    let newMessageBody = state.newMessageBody;


    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>{dialogsElements}</div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};


export default Dialogs;
