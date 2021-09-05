import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = props.dialogsPage.messages
    .map(m => <Message message={m.message} />);

  let messageArea = React.createRef();

  let sendMessage = () => {
    props.dispatch({type: 'SEND-MESSAGE'});
  };

  let onMessageChange = () => {
    let text = messageArea.current.value;
    props.dispatch({ type: 'UPDATE-MESSAGE-TEXT', newMessage: text});
  };
  return (
    <div className={s.dialogs}>
      <div>
        {dialogElements}
      </div>
      <div>
        {messageElements}
        <textarea
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
          ref={messageArea} />
        <div>
          <button onClick={sendMessage}>Отправить</button>
        </div>

      </div>
    </div>
  );
};
export default Dialogs;