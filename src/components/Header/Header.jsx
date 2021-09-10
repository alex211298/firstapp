import './../Header/Header.css'
import { NavLink } from "react-router-dom";
const Header = () =>{
    return(
        <header className = 'header'>
          <NavLink to='/profile'>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mr-bread-logo-design-template-8a8bf7264deccf537f8dd318785ebd6f_screen.jpg?' alt='logo-image'/>
          </NavLink>
        </header>
    );
}
export default Header;