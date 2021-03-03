import React from "react";
import Logo from '../../assets/discordsoul.png';

import { Container } from './styles'

export default function Footer(left) {  
  return (
      <>
      <footer>
        <Container>
          <div className="row">
              <img src={Logo} alt="img" className="img-fluid"/>
              <div className="copyright">Todos os direitos reservados</div>
          </div>
        </Container>
      </footer>
      </>
    );
}