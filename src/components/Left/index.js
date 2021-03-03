import React, { useState } from "react";
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
//
import Logo from '../../assets/discordsoul.png';
import { Be } from './styles'
import { logout } from '../../services/auth';
import { FaBoxOpen, FaHome, FaCreditCard, FaInfo, FaArrowRight, FaChevronDown } from 'react-icons/fa'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

export default function Left() {  

  const data = jwt.decode(localStorage.getItem('@redyydev'));

  function show_hide(){
    var click = document.getElementById('drop-content');
    if (click.style.display === 'none'){
      click.style.display = 'block';
      click.style.transform = 'translateY(0)';
      click.style.opacity = '1';
    } else {
      click.style.display = 'none'
    }
  }
  function show_hidef(){
    var click = document.getElementById('drop-contentf');
    if (click.style.display === 'none'){
      click.style.display = 'block';
      click.style.transform = 'translateY(0)';
      click.style.opacity = '1';
    } else {
      click.style.display = 'none'
    }
  }
  function profileinfo(){
    var click = document.getElementById('drop-contentp');
    if (click.style.display === 'none'){
      click.style.display = 'block';
      click.style.transform = 'translateY(0)';
      click.style.opacity = '1';
    } else {
      click.style.display = 'none'
    }
  }



  function sair(){
    logout();
    setTimeout(() => {
      store.addNotification({
        title: "INFO",
        message: "Saiste da conta com sucesso.",
        type: "warning",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3500,
          onScreen: true
        }
      });
    }, 200);
  }

  return (
    <>
      <Be>
        <div className="account-detailes">
          <img src={Logo} alt="logo" className="profile-pic"/>
          <ul className="nav user-area-nav">
            <li className="account">
              <center>
              <a href="#" id="profileinfo" onClick={() => profileinfo()}>
                <h3 style={{ fontWeight: 'lighter' }}>Olá, {data ? data.name : ''}! <FaChevronDown size="10"/></h3>
                <div style={{ display: 'none' }}  id="drop-contentp">
                  <a href="#1">Editar Detalhes da Conta</a>
                  <a href="#1">Alterar Senha</a>
                  <a href="#1" onClick={() => sair()}>Sair</a>
                </div>
              </a><br/><br/>
              <a className="span" href="#1" onClick={() => sair()}><FaArrowRight size="15" style={{ fontWeight: '200' }}/>
              </a><br/><br/>
              <Link to="/dashboard"><button><FaHome/>&nbsp;Área de Jogador</button></Link>
              <button><FaInfo/>&nbsp;Suporte</button>
              </center>
             </li>
          </ul>
        </div>
      </Be>
    </>
  );
}