import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'

const Contact = () => {
  return (
    <Container className="w-75 contact">
      <div className='page-header'>
        <h1>Fale com a gente!</h1>
      </div>
      <Row>
        <Col>
          <h2>Horário de funcionamento</h2>
          <p>Segunda a Sexta - 08h às 18h</p>
          <p>Sábado - 08h às 17h30</p>
          <p>Feriados - 08h às 12h30</p>
        </Col>
        <Col>
          <p> <img className="contact-img" src="img/whatsapp.png" alt="whatsapp" /> WhatsApp</p>
          <p>(11) 98765-4321</p>
          <p> <img className="contact-img" src="img/phone.png" alt="telefone" /> Telefone</p>
          <p>(11) 2041-4940</p>
          <p>(11) 2041-7638</p>
          <p> <img className="contact-img" src="img/gmail.png" alt="gmail" /> Email</p>
          <p>eletroze.mat@gmail.com</p>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact;