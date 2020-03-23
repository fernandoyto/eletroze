import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
      <h1>
        <Link to='/'>
          ELETROZÉ
        </Link>
      </h1>
      <h2>
        MATERIAIS PARA CONSTRUÇÃO
      </h2>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/quem-somos'>Quem Somos</Link>
        <Link to='/onde-estamos'>Onde Estamos</Link>
        <Link to='/parceiros'>Parceiros</Link>
        <Link to='/contato'>Contato</Link>
      </nav>
    </div>
  )
}

export default Navbar;