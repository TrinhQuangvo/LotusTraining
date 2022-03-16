import React, { Children } from 'react'
import './style.scss'
import logo from './../../Images/image001.jpg'

interface Props {
  children?: any
}

const FullWidthContainer = (props: Props) => {
  return (
    <>
      <header className='header'>
        <div className="header__wrapper">
          <div className="header__wrapper--logo">
            <a href='#'>Lotus Outsourcing</a>
          </div>
          <div className="header__wrapper--button">
            <a href="#">Cart</a>
          </div>
        </div>
      </header>
      <div className="wrapper">
        {props.children}
      </div>
      <footer className='footer'>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <img src={logo} />
          </div>
          <div className="footer__infor">
            <p>9th Floor , 31 Hai Ba Trung , Hue Provine</p>
            <p>Phone Number : 092323232</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FullWidthContainer
