import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>
      <p>
        Site feito na #ImersãoReact da Alura 
      </p>
    </FooterBase>
  );
}

export default Footer;
