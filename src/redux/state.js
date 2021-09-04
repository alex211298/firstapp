let state = {
  profilePage: {
    posts: [
      { id: 1, name: "Alex", message: "My first comment", likeCount: "12" },
      { id: 2, name: "Viktoria", message: "Hello", likeCount: "35" }
    ]
  },
  dialogsPage:{
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Kolya" },
      { id: 4, name: "Roma" }
    ],
    messages: [
      { id: "1", message: "Hi" },
      { id: "2", message: "How is your mother?" }
    ]
  }
}
export default state;