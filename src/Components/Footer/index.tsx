import React, { FC } from 'react'
import logo from './../../Images/image001.jpg'

const Footer: FC = () => {
  return (
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
  )
}

export default Footer