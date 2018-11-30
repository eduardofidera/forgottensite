import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__brand">
      <li>
        <NavLink activeClassName="active" exact={true} to="/">
          <h1>ForgottenSite</h1>
        </NavLink>
      </li>
    </ul>
    <ul className="navbar__main">
      <li>
        <NavLink activeClassName="active" to="/about">
          <span>About</span>
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar
