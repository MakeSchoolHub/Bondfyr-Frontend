import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
      <div className="Title">
        <header>
          <h1>BONFYRE</h1>
          <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
  
          <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">List</NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">About</NavLink>      
          </div>
  
        </header>
      </div>
    )
  }

export default NavBar