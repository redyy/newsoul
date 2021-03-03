import React, { useState } from "react";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'

import { FaUser } from 'react-icons/fa';
import { Headers, Inner_header, Cona_container, Right, Anun } from "./styles";

export default function Navbar() {  
  let history = useHistory()

  return (
    <>
      <Headers>
      <Inner_header>
      <Link to="/">
      <Cona_container>
      <h1>NEW SOUL | ROLEPLAY</h1>
      </Cona_container>
      </Link>
      <Right>
      <Link to="/">
          <a className="item">
          Pagina Inicial
          </a>
        </Link>
        <Link to="#Aboutus">
            <a className="item">
            sobre nós
            </a>
          </Link>
          <Link to="/login">
          <a href="#" className="area">
                 <FaUser/> Área de Jogador
               </a>
          </Link>
          &nbsp;
          &nbsp;
      </Right>
      </Inner_header>
      </Headers>
    </>
  );
}