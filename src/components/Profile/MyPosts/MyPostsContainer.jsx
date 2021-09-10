import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage.posts;
  let newPostText = props.store.getState().profilePage.newPostText
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updatePost = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text));
  }

  return <MyPosts onAddPost = {addPost}
                  newPostText = {newPostText}
                  updatePostText = {updatePost}
                  appState = {state}/>
};
export default MyPostsContainer;