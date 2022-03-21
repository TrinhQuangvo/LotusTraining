import React, { FC, useState } from 'react';
import './style.scss';
import './Dropdown';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
const Header: FC = () => {
  return (
    <Router>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__wrapper--logo">
            <a href="#">Lotus Outsourcing</a>
          </div>

          {/* Navbar */}
          <div className="navbar-container">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>

          {/* Navbar */}

          <div className="header__wrapper--button">
            <a href="#">Cart</a>
          </div>
        </div>
      </header>
    </Router>
  );
};

export default Header;
