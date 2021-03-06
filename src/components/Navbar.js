import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
      <div className="Navbar">
        <header>
        <div className="Logo">
          <div className="LogoImage">
            <img src='./images/bonfire.png' alt='LogoImage' width='70'></img>
          </div>
          <div className="LogoText">Bondfyre</div>
        </div>
        
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/">Home
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/stage">Stage</NavLink>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/schedule">Schedule</NavLink>
        {/* <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/lounge">Lounge
        </NavLink> */}
        </header>
      </div>
    )
  }

export default NavBar