import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export const WindowNav = () => {
    return (
        <>
            <ul>
                <li><NavLink className="navItems active" to="/">Home</NavLink></li>
                <li><NavLink className="navItems" to="/service">Service</NavLink></li>
                <li><NavLink className="navItems" to="/about">About</NavLink></li>
                <li><NavLink className="navItems" to="/contact">Contact</NavLink></li>
                <li><button>Sign Up</button></li>
                <li><button>Login</button></li>
            </ul>
        </>
    );
}