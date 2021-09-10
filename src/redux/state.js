import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, name: "Alex", message: "My first comment", likeCount: "12" },
        { id: 2, name: "Viktoria", message: "Hello", likeCount: "35" }
      ],
      newPostText: "it-kamasutra.ua"
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};


export default store;