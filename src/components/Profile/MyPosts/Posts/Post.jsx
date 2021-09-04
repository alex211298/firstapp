import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://www.soyuz.ru/public/uploads/files/2/7447187/20200926175123a21ecab76d.jpg' alt='picture'/>
        {props.name}
        <div className={s.message}>
          {props.message}
        </div>
        <div>
          <span>
            like {props.like}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
