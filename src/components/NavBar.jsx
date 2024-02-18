import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>
        <h2>home</h2>
      </NavLink>

      <NavLink to='/characters'>
        <h2>Characters</h2>
      </NavLink>

      <NavLink to='/locations'>
        <h2>Locations</h2>
      </NavLink>

      <NavLink to='/episodes'>
        <h2>Episodes</h2>
      </NavLink>
    </nav>
  )
}

export default NavBar
