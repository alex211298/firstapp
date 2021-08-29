import s from './../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        Profile
      </div>
      <div className={s.item}>
        Messages
      </div>
      <div className={s.item}>
        News
      </div>
      <div className={s.item}>
        Music
      </div>
      <br />
      <div className={s.item}>
        Settings
      </div>
    </nav>
  );
}
export default Navbar;