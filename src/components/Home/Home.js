import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <Container fluid>

      <Row className="landing-container d-flex flex-column">
        <Col className="img-container">
          <Image className="img-logo" src="img/eletroze-logo.png" />
        </Col>
        <Col>
            <div>
              <h1>
                Todos os materiais para sua obra.
              </h1>
            </div>
            <div>
              <p>
                Desde 1992 trazendo os melhores produtos e os melhores preços!
              </p>
            </div>
            <div>
              <Button href="/localizacao" variant="outline-dark">
                Localização
              </Button>
              <Button variant="outline-dark">Contato</Button>
            </div>
            
        </Col>
      </Row>

      <Row className="about-container text-center d-flex flex-column">
        <Col className="row-title">
          <h2>
            Por que comprar no Eletrozé?
          </h2>
        </Col>
        <Col>
          <Row classname="justify-content-md-center">
            <Col>
              export
            </Col>  
            <Col md="auto">
              asdsad
            </Col>   
            <Col>
              sdada
            </Col>   
          </Row>
        </Col>  
      </Row>

      <Row className="links-container text-center d-flex flex-column">
        <Col className="row-title">
          <h2>
            Mais informações
          </h2>
        </Col>
        <Col>
          <Row classname="justify-content-md-center">
            <Col>
              Link 1 - Localização
            </Col>
            <Col md="auto">
              Link 2 - Sobre nós
            </Col>
            <Col>
              Link 3 - Contato
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home