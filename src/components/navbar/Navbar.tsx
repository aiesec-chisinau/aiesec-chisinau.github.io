import { Link } from "react-router-dom"
import './navbar.css'
const Navbar =()=>{
      return (
        <>
        <header className="header">
        <a href="" className="logo"><img src='/images/logo.png' height={'20px'}/></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          
        <li><Link to="/projects">Our Projects</Link></li>
        <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>
      <div id="under_nav_header"></div>
      </>
        
      )
}
export default Navbar;