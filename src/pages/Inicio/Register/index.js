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

function Register() {
  document.title = "New Soul | RolePlay - Register";

  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [discord, setdiscord] = useState('')
  const [steam, setsteam] = useState('')
  const [success, setsuccess] = useState(false)
  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    try {
      if (!password || !email || !name || !steam || !discord) {
        store.addNotification({
          title: "ERRRO",
          message: "Insere todos os dados.",
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
      if (email,password,name, discord, steam) {
        await api.post('auth/register', { email, password, name, discord, steam }).catch(function (err){
          if (email || password || name) {
            if (err.response.status === 400) {
              store.addNotification({
                title: "ERRRO",
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
          if (res){
            if (email || password || name) {
              setsuccess(true)
              store.addNotification({
                title: "Sucesso,",
                message: "Redericionando para a pagina de Login..",
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
                history.push('/login');
                store.addNotification({
                  title: "INFO",
                  message: "Foi enviado um e-mail para você com os dados de acesso.",
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
              }, 3500);
          }
          }
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  

  return (
  <>
   <Nav/>
  <Header>
  <ReactNotification />
      </Header>
      <ContentWrapper>
      <Bg>
        <center>
        <Form onSubmit={handleRegister}>
      <input 
      type="text"
      placeholder="* Nome de Utilizador"
      onChange={e => setname(e.target.value)}
      />
      <input 
      type="email"
      placeholder="* E-mail"
      onChange={e => setemail(e.target.value)}
      />
      <input 
      type="password"
      placeholder="* Senha"
      onChange={e => setpassword(e.target.value)}
      />
      <input 
      type="text"
      placeholder="* Discord"
      onChange={e => setdiscord(e.target.value)}
      />
      <input 
      type="text"
      placeholder="* Steam"
      onChange={e => setsteam(e.target.value)}
      />
      <>
      {!success &&
      <>
      <button type="submit">Criar Conta</button>
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
      <Link to="/login" style={{ padding: '15px', fontSize: '13.5px', fontWeight: 'lighter' }}>Ja tens Conta? Faz Login</Link>
    </Form>
        </center>
      </Bg>
      </ContentWrapper>
  <Footer/>
  </>
  )
}

export default Register;