import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = ({ onLoginClick, onRegisterClick, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <img src={menu} alt="Menu" className="menu-icon" onClick={toggleMenu} />
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="upper container" smooth={true} className="navbar-link" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="activities" smooth={true} className="navbar-link" onClick={toggleMenu}>Activities</Link></li>
          <li><Link to="about" smooth={true} className="navbar-link" onClick={toggleMenu}>About</Link></li>
          <li><Link to="testimonials" smooth={true} className="navbar-link" onClick={toggleMenu}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} className="navbar-link" onClick={toggleMenu}>Contact</Link></li>
        </ul>
        <div className="navbar-actions">
          {user ? (
            <div className="navbar-user">
              <span>Welcome, {user.full_name}</span>
              
              {/* You can add more user options here */}
            </div>
          ) : (
            <>
              <button className="btn light-btn" onClick={onLoginClick}>Login</button>
              <button className="btn dark-btn" onClick={onRegisterClick}>Register</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
