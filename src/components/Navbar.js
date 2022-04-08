import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="nav-wrapper red darken-3">
            <div className="cantainer">
                <a className="brand-logo">welcome</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    {/* get active information */}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;