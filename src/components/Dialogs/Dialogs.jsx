import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.appState.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = props.appState.messages
    .map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div>
        {dialogElements}
      </div>
      <div>
        {messageElements}
      </div>
    </div>
  );
};
export default Dialogs;