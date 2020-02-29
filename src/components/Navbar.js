import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/quem-somos'>Quem Somos</Link>
      <Link to='/onde-estamos'>Onde Estamos</Link>
      <Link to='/parceiros'>Parceiros</Link>
      <Link to='/contato'>Contato</Link>
    </nav>
  )
}

export default Navbar;