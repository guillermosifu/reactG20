

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className="nav">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="card">Home</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="Git">Servicios</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="card">Portafolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" aria-disabled="true">Contacto</a>
    </li>
  </ul>
  )
}

export default Header
