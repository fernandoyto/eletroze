import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
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
                Os melhores produtos e os melhores preços há 20 anos em A. E. Carvalho!
              </p>
            </div>
            
        </Col>
      </Row>

      <Row className="about-container text-center d-flex flex-column">
        <Col className="row-title">
          <h2 className="">
            O que é o Eletrozé?
          </h2>
        </Col>
        <Col>
          <Row>
            <Col>
                <p>
                  Pipipi 1
                  Pópópó
                </p>
            </Col>  
            <Col>
                <p>
                  Pipipi 2
                  Pópópó
                </p>
            </Col>   
            <Col>
                <p>
                  Pipipi 3
                  Pópópó
                </p>
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
          <Row>
            <Col>
              Link 1 - Localização
            </Col>
            <Col>
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