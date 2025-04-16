import { Link } from "react-router-dom"
import weblogo from '../assets/weblogo.svg'
import './nav.css';
function Navbar(){

    return(
        <nav className="nav">
      <div className="logo">
        <img src={weblogo} alt="NLITE Logo" />
      </div>
      <div  className="menu">
      <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/about'>About</Link>
        <Link className="link" to='/courses'>Courses</Link>
        <Link className="link" to='/blogs'>Blogs</Link>
        <Link className="link" to='/contact'>Contact Us</Link>
        <Link className="link" to='/enroll'>Enroll Now</Link>
      </div>
      <div className="button">
        <button>Enroll Now</button>
      </div>
    </nav>
       
       
    )
}

export default Navbar;