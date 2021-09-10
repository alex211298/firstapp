import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = props.messages
    .map(m => <Message message={m.message} />);

  let messageArea = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = messageArea.current.value;
    props.onMessageChange(text);
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
          value={props.newMessageText}
          ref={messageArea}
          placeholder='Enter your message'/>
        <div>
          <button onClick={sendMessage}>Отправить</button>
        </div>

      </div>
    </div>
  );
};
export default Dialogs;