import s from './MyPosts.module.css'
import Post from './Posts/Post';
const MyPosts = () => {
  return (
    <div> 
      <div className={s.item}>
        My posts
      </div>
      <div className={s.item}>
        <textarea></textarea>
        <div>
        <button>Добавить</button>
        </div>
      </div>
      <Post name = 'Alex' message = 'My first comment' like = '15'/>
      
    </div>
  );
}
export default MyPosts;