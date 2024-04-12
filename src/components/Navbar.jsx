import { NavLink } from "react-router-dom"
import navbarStyle from "../modules/Navbar.module.css"
import Logo from "./Logo"
function Navbar(){

    return (
        
            <nav className={navbarStyle.navbar}>
        <ul>.
            <Logo/>
            <li><NavLink to="/">For you</NavLink> </li>
            <li><NavLink to="/profile">Profile</NavLink> </li>
        </ul>
            </nav>
       
    )
}

export default Navbar