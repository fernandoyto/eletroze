import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'

const Home = () => {
  return (
    <Container fluid>

      <Row className="justify-content-around landing-container align-items-center">

        <Col className="">
          <img className="img-fachada" src="img/eletroze-fachada.jpeg" alt="fachada-eletroze" />
        </Col>

        <Col>

          <Row>

            <Col className="text-center" >
              a melhor loja
            </Col>

            <Col className="text-center">
              o melhor preço
            </Col>

          </Row>

        </Col>

      </Row>

      <Row className="about-container">

        <Col>
          mais infos
        </Col>
        
      </Row>

      <Row className="links-container">

        <Col>
          Links para localização e sobre nós
        </Col>

        <Col>
          Links para localização e sobre nós          
        </Col>

      </Row>
    </Container>
  );
};

export default Home