import React, { useState } from 'react';
import '../styles/components/_header.scss';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-icon" />
          <span className="logo-text">ProVital</span>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div className={`right-section ${menuOpen ? 'show' : ''}`}>
        <div className="center-links">
          <a href="#">List your practice</a>
          <span className="divider" />
          <a href="#">For Employers</a>
          <span className="divider" />
          <a href="#">Courses</a>
          <span className="divider" />
          <a href="#">Books</a>
          <span className="divider" />
          <a href="#">Speakers</a>
          <span className="divider" />
          <a href="/doctors">Doctors</a>
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="dropdown-toggle">Login / Signup ▾</span>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <span className="label">Doctor</span>
                <a href="/doctor-login">Login</a>
                <a href="/doctor-signup">Sign up</a>
              </div>
              <div className="dropdown-row">
                <span className="label">Patients</span>
                <a href="/patient-login">Login</a>
                <a href="/patient-signup">Sign up</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
