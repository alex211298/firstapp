import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postsElements = props.appState
    .map(p => <Post name={p.name} message={p.message} like={p.likeCount} />);
  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea></textarea>
        <div>
          <button>Добавить</button>
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