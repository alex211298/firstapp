import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import React from 'react'

const MyPosts = (props) => {
  let postsElements = props.appState
    .map(p => <Post name={p.name} message={p.message} like={p.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value = {props.newPostText}/>
        <div>
          <button
            onClick={addPost}>Добавить
          </button>
        </div>
      </div>
      <br />
      <div>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;