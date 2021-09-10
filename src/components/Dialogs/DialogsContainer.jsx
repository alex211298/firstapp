import React from "react";
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let messages = props.store.getState().dialogsPage.messages
  let dialogs = props.store.getState().dialogsPage.dialogs
  let newMessageText = props.store.getState().dialogsPage.newMessageText
  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActionCreator(text));
  };
  return <Dialogs sendMessage = {sendMessage}
                  messages = {messages}
                  dialogs = {dialogs}
                  newMessageText = {newMessageText}
                  onMessageChange = {onMessageChange}/>
};
export default DialogsContainer;