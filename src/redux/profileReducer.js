const AddPost = "ADD-POST";
const UpdateNewPostText = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, name: "Alex", message: "My first comment", likeCount: "12" },
    { id: 2, name: "Viktoria", message: "Hello", likeCount: "35" }
  ],
  newPostText: "it-kamasutra.ua"
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case AddPost:
      let newPost = {
        id: 5,
        name: "Alex",
        message: state.newPostText,
        likeCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UpdateNewPostText:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export let addPostActionCreator = () => {
  return {
    type: AddPost
  };
};
export let onPostChangeActionCreator = (text) => {
  return { type: UpdateNewPostText, newText: text };
};

export default profileReducer;