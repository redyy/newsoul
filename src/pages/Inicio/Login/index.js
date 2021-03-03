import React, {useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import ReactNotification from 'react-notifications-component';
import { ClipLoader } from 'react-spinners';
import { store } from 'react-notifications-component';

import api from '../../../services/api'
import { login } from '../../../services/auth';

import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { Header, Bg, ContentWrapper, Form } from './style';

function Login() {
  document.title = "New Soul | RolePlay - Login";

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [success, setsuccess] = useState(false)
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try {
      if (!password || !email) {
        store.addNotification({
          title: "ERRO",
          message: "Preenche todos os dados.",
          type: "danger",
          insert: "bottom",
          container: "bottom-left",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 2500,
            onScreen: true
          }
        });
      }

       await api.post('auth/login', { email, password }).catch(function (err){
          if (email || password) {
            if (err.response.status === 400) {
              store.addNotification({
                title: "ERRO",
                message: err.response.data.error,
                type: "danger",
                insert: "bottom",
                container: "bottom-left",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 2500,
                  onScreen: true
                }
              });
            }
          }
        }).then((res) => {
          if (email || password ) {
            login(res.data.token)
            setsuccess(true)
            store.addNotification({
              title: `Bem vindo, ${res.data.user.name}`,
              message: "Redericionando para a Area de Jogador..",
              type: "success",
              insert: "bottom",
              container: "bottom-left",
              animationIn: ["animated", "fadeIn"],
              animationOut: ["animated", "fadeOut"],
              dismiss: {
                duration: 3500,
                onScreen: true
              }
            });
            setTimeout(() => {
              history.push('/dashboard');
            }, 3500);
          }
        })
        
    } catch (e) {
      console.log(e)
    }
  }

  return <> 
  <ReactNotification />
  <Nav/>
  <Header>
  </Header>
  <ContentWrapper>
      <Bg>
        <center>
          <Form onSubmit={handleLogin}>
          <>
          <input 
          type="email"
          placeholder="E-mail"
          onChange={e => setemail(e.target.value)}
          />
          </>
          <input 
          type="password"
          placeholder="Senha"
          onChange={e => setpassword(e.target.value)}
          />
          <>
          {!success &&
          <>
          <button type="submit">Entrar</button>
          </>
          }
          {success &&
          <>
          <button type="submit" className="disabled">
          <ClipLoader sizeUnit={"px"} size={40} color={'#fff'} loading={success}/>
          </button>
          </>
          }
          </>
          <Link to="/register" style={{ padding: '15px', fontSize: '13.5px', fontWeight: 'lighter' }}>Não tens uma conta? Faz Registo</Link>
        </Form>
        </center>
      </Bg>
      </ContentWrapper>
      <Footer/>
  </>;
}

export default Login;