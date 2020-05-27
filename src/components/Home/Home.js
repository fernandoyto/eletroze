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
        </Col>
        <Col>
          <div>
            <Button href="/localizacao" variant="outline-dark">
              Localização
          </Button>
            <Button href="/contato" variant="outline-dark">
              Contato
          </Button>
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
          <Row className="justify-content-md-center">
            <Col className="padding-bottom" >
              <div>
                <Image className="img-why-us" src="img/money.png" alt="economizar" />
              </div>
              <div>
                <h4>Preço baixo para você</h4>
                <p>Queremos atender todas as pessoas de A.E Carvalho e região</p>
              </div>
            </Col>
            <Col className="padding-bottom" md="auto">
              <div>
                <div>
                  <Image className="img-why-us" src="img/hammer.png" alt="materiais-construcao" />
                </div>
                <div>
                  <h4>Os produtos que você precisa</h4>
                  <p>O melhor custo benefício para sua obra</p>
                </div>
              </div>
            </Col>
            <Col className="padding-bottom" >
              <div>
                <div>
                  <Image className="img-why-us" src="img/handshake.png" alt="confianca" />
                </div>
                <div>
                  <h4>Confiança e serviço que você já conhece</h4>
                  <p>Estamos há mais de 20 anos ao seu lado!</p>
                </div>
              </div>
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
          <Row className="justify-content-md-center">
            <Col className="padding-bottom" >
              <div>
                <div>
                  <Link to="/localizacao">
                    <Image className="img-why-us" src="img/location.png" alt="localizacao" />
                  </Link>
                </div>
                <div>
                  <h4>Localização</h4>
                  <p>Veja onde nos encontrar</p>
                </div>
              </div>
            </Col>
            <Col className="padding-bottom" md="auto">
              <div>
                <div>
                  <Link to="/contato">
                    <Image className="img-why-us" src="img/contact.png" alt="contato" />
                  </Link>
                </div>
                <div>
                  <h4>Contato</h4>
                  <p>Saiba como falar com nós</p>
                </div>
              </div>
            </Col>
            <Col className="padding-bottom" >
              <div>
                <div>
                  <Link to="sobre-nos">
                    <Image className="img-why-us" src="img/info.png" alt="sobre-nos" />
                  </Link>
                </div>
                <div>
                  <h4>Sobre nós</h4>
                  <p>Conheça um pouco mais do Eletrozé!</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home