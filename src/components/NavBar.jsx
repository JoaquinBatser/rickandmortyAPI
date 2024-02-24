import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiPortal } from 'react-icons/gi'

const NavBar = () => {
  return (
    <nav className='flex h-20 items-center justify-between'>
      <NavLink
        className='home'
        to='/'
      >
        <GiPortal
          color='lightgreen'
          size={40}
        />
      </NavLink>

      <NavLink to='/about'>
        <p>About</p>
      </NavLink>
    </nav>
  )
}

export default NavBar
