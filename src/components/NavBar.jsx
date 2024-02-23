import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiPortal } from 'react-icons/gi'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink
        className='home'
        to='/'
      >
        <GiPortal
          color='lightgreen'
          size={40}
        />
      </NavLink>

      <ul>
        <li>
          <NavLink to='/characters'>
            <p>Characters</p>
          </NavLink>
        </li>

        <li>
          <NavLink to='/locations'>
            <p>Locations</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/episodes'>
            <p>Episodes</p>
          </NavLink>
        </li>
      </ul>
      <NavLink to='/about'>
        <p>About</p>
      </NavLink>
    </nav>
  )
}

export default NavBar
