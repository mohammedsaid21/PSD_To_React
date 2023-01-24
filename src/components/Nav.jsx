import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../imgs/logo.png"

const Nav = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />

      <a className="navbar-brand" href="#"><img src={Logo} width="150" alt="" /></a>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>


      <ul className="navbar-nav nav-links">
        <li className="nav-item active">
          <Link to="/" className="nav-link active">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About us</Link>
        </li>
        <li className="nav-item">
          <Link to="/ourteam" className="nav-link">Our team</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Nav