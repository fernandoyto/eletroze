import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarTest = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light" expand="lg">
      <Navbar.Brand href="/">Eletrozé Materiais</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto d-flex justify-content-center" >
          <Nav.Item>
            <Nav.Link href="/">Página Inicial</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sobre">Sobre Nós</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/localizacao">Localização</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarTest;