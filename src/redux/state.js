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
      newMessageText: "enter Your message"
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

  dispatch (action) {
    if (action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        name: "Alex",
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'SEND-MESSAGE') {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  }
};


export default store;