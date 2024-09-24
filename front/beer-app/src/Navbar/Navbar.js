import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-white.png';

const Navbar = () => {
  return (
    <div className='bg-danger '>
      <nav className="navbar navbar-expand-lg mt-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ height: '60px' }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav" style={{  fontFamily :'sans-serif',}}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark p-3" to="/Dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark p-3" to="/Additem">Add Root Beer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark p-3" to="/Addreview">Add Review</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark p-3" to="/Addimage">Add Image</Link>
              </li>
              <li className="nav-item">
                <form className="d-flex">
                  <input
                    type="search"
                    className="form-control me-2 p-2 mt-2"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Navbar;
