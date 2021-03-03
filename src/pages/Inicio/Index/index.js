import React from 'react';
import Typed from 'react-typed';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';

import Logo from '../../../assets/discordsoul.png';


import Nav from '../../../components/Nav'
import { Header, Aboutus, Partners } from './style';

function index() {
  document.title = "New Soul | RolePlay";

  function error(){
    store.addNotification({
      title: "ERRO",
      message: "Neste momento as candidaturas estão indisponíveis..",
      type: "danger",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1900,
        onScreen: true
      }
    });
  }

  return <> 
  <ReactNotification />
  <Nav/>
  <Header>
    <div className="mid">
      <div className="logo">
        <img src={Logo} alt="img"/>
        <div className="welcome animated fadeIn">Bem-vindo, Jogador</div>
          <div className="welcome-2 animated fadeIn">Estás pronto para entrar em algo <Typed strings={["revolucionário?", "diferente?"]} typeSpeed={350} backSpeed={150} loop/></div>
          <div className="welcome-2 animated fadeIn"><button onClick={() => error()}>Fazer Candidatura</button></div>
          <div></div>
      </div>
    </div>
  </Header>
  <Aboutus id="Aboutus">
    <div className="header">
      <h1>SOBRE NÓS</h1>
    </div>
    <div className="footer">
      <p>Sê bem vindo a um dos projetos mais promissores e sérios a nível do Roleplay em Portugal.<br/>
      Este é o Website de candidaturas da comunidade, lê as regras e faz já a tua candidatura. <br/>
      O servidor encontra se em desenvolvimento por isso fica atento ao discord e vai vendo os updates.<br/>
      <br/>Cumprimentos, Equipa <strong>New Soul</strong></p>
    </div>
  </Aboutus>
  <Partners>
    <div className="header">
      <div className="block">
        <h1>QUERES FAZER PARCERIA?</h1>
        <p>
          Contacta o nosso <b>departamento de parcerias</b> no nosso discord.
        </p>
      </div>
    </div>
  </Partners>
  </>;
}

export default index;