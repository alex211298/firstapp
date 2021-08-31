import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

 const DialogItem = (props) => {
    return (
      <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
    );
}
const Message = (props) =>{
 return (
   <div className={s.message}>{props.message}</div>
 );
}


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          <DialogItem name = 'Dimych' id ='1'/>
          <DialogItem name = 'Andrey' id ='2'/>
          <DialogItem name = 'Kolya' id ='3'/>
          <DialogItem name = 'Roma' id ='4'/>
      </div>
      <div className={s.messages}>
        <Message message = 'Hi'/>
        <Message message = 'How is your mother?'/>
      </div>
    </div>
  );
};
export default Dialogs;