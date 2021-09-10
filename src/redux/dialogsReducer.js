const SendMessage = "SEND-MESSAGE";
const UpdateMessageText = "UPDATE-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Kolya" },
    { id: 4, name: "Roma" }
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How is your mother?" }
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SendMessage:
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UpdateMessageText:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};
export let onMessageChangeActionCreator = (text) => {
  return { type: UpdateMessageText, newMessage: text };
};
export let sendMessageActionCreator = () => {
  return {
    type: SendMessage
  };

}

export default dialogsReducer;