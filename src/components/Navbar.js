import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container home'>
      <h1>
        <Link to='/'>
          ELETROZÉ MATERIAIS PARA CONSTRUÇÃO
        </Link>
      </h1>
      <nav className='row'>
        <Link className='col' to='/'>Página Inicial</Link>
        <Link className='col' to='/quem-somos'>Quem Somos</Link>
        <Link className='col'to='/onde-estamos'>Onde Estamos</Link>
        <Link className='col'to='/parceiros'>Parceiros</Link>
        <Link className='col'to='/contato'>Contato</Link>
      </nav>
    </div>
  )
}

export default Navbar;