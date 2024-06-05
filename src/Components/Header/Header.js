import React, { useState, useEffect } from "react";
import logo from '../../Assets/Images/Logo.png';
import './Header.css';
import { NavLink , useLocation } from 'react-router-dom';

function Header() {
  const [active, setActive] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className="headerContainer container-fluid p-0 sticky-top">
      <nav className="navbar navbar-expand-lg headerNavbar navbar-light">
        <a className="navbar-brand ml-5 p-0 mr-0" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className={`nav-item ${active === '/' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/" onClick={() => setActive('/')}>Home</NavLink>
            </li>
            <li className={`nav-item ${active === '/about' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/about" onClick={() => setActive('/about')}>About Us</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/a" onClick={() => setActive('/services/action')}>Action</NavLink>
                <NavLink className="dropdown-item" to="/ab" onClick={() => setActive('/services/another')}>Another action</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/abc" onClick={() => setActive('/services/something-else')}>Something else here</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/products" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Products
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/c" onClick={() => setActive('/products/action')}>Action</NavLink>
                <NavLink className="dropdown-item" to="/cd" onClick={() => setActive('/products/another')}>Another action</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/cde" onClick={() => setActive('/products/something-else')}>Something else here</NavLink>
              </div>
            </li>
            <li className={`nav-item ${active === '/portfolio' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/portfolio" onClick={() => setActive('/portfolio')}>Portfolio</NavLink>
            </li>
            <li className={`nav-item ${active === '/contact' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/contact" onClick={() => setActive('/contact')}>Contact Us</NavLink>
            </li>
            <li className={`nav-item ${active === '/consulting' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/consulting" onClick={() => setActive('/consulting')}>Get Consulting</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default React.memo(Header);
