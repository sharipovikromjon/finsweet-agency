import React from 'react'
import './header.css'

const Header = ({logo}) => {
  return (
    <>
      <ul className='header__block'>
        <img src={logo} alt="logo" />
        <ul className='header__list'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </ul>
    </>
  )
}

export default Header
