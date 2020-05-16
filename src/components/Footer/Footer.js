import React from 'react';
import Image from 'react-bootstrap/Image'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer text-center'>
            <div className="icons-div d-flex justify-content-center">
                <span className="align-baseline">
                    <a href="https://linkedin.com/in/fernando-yto" target="_blank" rel="noopener noreferrer">
                        <Image className="icon-image" alt="linkedin-logo" src="img/linkedin-icon.png" />
                    </a>
                </span>
                <span className="align-baseline">
                    <a href="https://github.com/fernandoyto" target="_blank" rel="noopener noreferrer">
                        <Image className="icon-image" alt="github-logo" src="img/github-icon.png" />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Footer;