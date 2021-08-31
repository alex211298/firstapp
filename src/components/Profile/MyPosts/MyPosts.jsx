import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
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
      <br/>
      <div>
      <Post name="Alex" message="My first comment" like="15" />
      </div>
    </div>
  );
};
export default MyPosts;