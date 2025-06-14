import React from 'react';
import '../styles/components/_navbar.scss';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src={logo}alt="logo" className="logo-icon" />
        </div>
      </div>


      <div className="right-section">
        <div className="center-links">
          <Link to="#">List your practice</Link>
          <span className="divider" />
          <Link to="#">For Employers</Link>
          <span className="divider" />
          <Link to="#">Courses</Link>
          <span className="divider" />
          <Link to="#">Books</Link>
          <span className="divider" />
          <Link to="#">Speakers</Link>
          <span className="divider" />
          <Link to="/doctors">Doctors</Link>
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
                <Link to="/doctor-login">Login</Link>
                <Link to="/doctor-signup">Sign up</Link>
              </div>
              <div className="dropdown-row">
                <span className="label">Patients</span>
                <Link to="/patient-login">Login</Link>
                <Link to="/patient-signup">Sign up</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;