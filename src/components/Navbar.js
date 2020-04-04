import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarTest = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Eletrozé Materiais</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Página Inicial</Nav.Link>
          <Nav.Link href="/quem-somos">Quem Somos</Nav.Link>
          <Nav.Link href="/localizacao">Localização</Nav.Link>
          <Nav.Link href="/contato">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarTest;