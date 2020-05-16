import React from 'react';
import Container from 'react-bootstrap/Container'
import './Footer.css'

const Footer = () => {
    return(
        <Container fluid className='footer text-center'>
            <p className="align-middle">
                Feito por Fernando Yto
            </p>
        </Container>
    );
}

export default Footer;