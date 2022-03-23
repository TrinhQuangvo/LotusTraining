import React, { FC } from 'react';
import './style.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper--logo">
          <a href="#">Lotus Outsourcing</a>
        </div>

        <div className="header__wrapper__navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>

          <ul className="main-nav">
            <li className="nav-item  has-dropdown">
              <a href="#" className="nav-link">
                Produce <i className="fa fa-angle-down" data-toggle="dropdown"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item-lv2">
                  <a className="nav-link" href="#">
                    Iphone
                  </a>
                </li>
                <li className="nav-item-lv2">
                  <a className="nav-link" href="#">
                    SamSung
                  </a>
                </li>
                <li className="dropdown-submenu nav-item-lv2">
                  <a className="nav-link" href="#">
                    Oppo <i className="fa fa-angle-right"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="#">
                        Oppo A95
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="#">
                        Oppo A94
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <a href="#contact-us">Contact</a>
        </div>

        <div className="header__wrapper--button">
          <a href="#">Cart</a>
        </div>
        <div className="header__wrapper--button">
          <a href="#">Sign Up</a>
        </div>
        <div className="header__wrapper--button">
          <a href="#">Sing In</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
