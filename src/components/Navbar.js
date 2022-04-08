const Navbar = () => {
    return ( 
        <nav className="nav-wrapper red darken-3">
            <div className="cantainer">
                <a className="brand-logo">welcome</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;