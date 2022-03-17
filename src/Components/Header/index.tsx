import React, { FC } from 'react'
import './style.scss'

const Header: FC = () => {
  return (
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
  )
}

export default Header