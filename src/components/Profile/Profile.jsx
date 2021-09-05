import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts appState = {props.profilePage.posts}
               newPostText = {props.profilePage.newPostText}
               dispatch = {props.dispatch}/>
    </div>
  );
};
export default Profile;
