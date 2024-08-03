

import React from 'react'

const Header = () => {
  return (
    <ul className="nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="./App.jsx">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="./Apigit.jsx">Servicios</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Portafolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" aria-disabled="true">Contacto</a>
    </li>
  </ul>
  )
}

export default Header
