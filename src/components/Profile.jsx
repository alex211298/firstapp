import s from './../styles/Profile.module.css'
const Profile = () => {
  return (
    <div className={s.profile}>
      <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='beautiful image'></img>
      <div className={s.item}>
        Avatar + description
      </div>
      <div className={s.item}>
        My posts
      </div>
      <div className={s.item}>
        New posts
      </div>
      <div className={s.item}>
        post 1
      </div>
    </div>
  );
}
export default Profile;