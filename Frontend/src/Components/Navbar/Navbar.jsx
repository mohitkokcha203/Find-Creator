import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from '../../utils';
import { AuthContext } from '../../Authcontext';

const Navbar = () => {
  const { isLoggedIn, username, setIsLoggedIn, setUsername } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedinUser');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
    const message = 'Logout Successful';
    handleSuccess(message);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
      <div className='navbar-logo'>
        <Link to={'/'}><img src={assets.logo} alt="logo" className='logo' /></Link>
      </div>
      <div className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <a href="/#search"><FontAwesomeIcon icon={faSearch} /> Discover Channels</a>
        <Link to={'/contactus'}>Contact us</Link>
        {isLoggedIn ? (
          <>
            <span className='navbar-user-name'>{username}</span>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={handleLogout} className='logout-icon' title="Logout" />
          </>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;
