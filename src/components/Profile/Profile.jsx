import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div className={s.profile}>
      <img
        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
        alt="beautiful image"
      ></img>
      <div>Avatar + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
