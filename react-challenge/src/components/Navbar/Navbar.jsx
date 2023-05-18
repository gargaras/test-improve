import React from "react";
import {Redirect} from 'react-router-dom'
import logo from '../../assets/images/vinyl.svg'
import './navbar.css'
const Navbar = ({isAuth,logout}) => {
    if (isAuth===false) return <Redirect to={{pathname:'/'}}/>
  return (
    <div className='navbar-component'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/music">
            <img src={logo} alt="vinyl logo" width="30" height="24" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button className="btn btn-outline-success" onClick={(e)=>logout(e)}>
                Log Out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
