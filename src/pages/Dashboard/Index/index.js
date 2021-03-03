import React from 'react';
import { Link } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';


import { Container } from './style';
import Left from '../../../components/Left'

function index() {
  document.title = "New Soul | RolePlay - Area de Jogador";

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
  <Container>
  <Left/>
    <section className="content">
      <div>
        <div className="client-home-panels">
          <div className="row">
            <div className="col-sm-6">
            <div className="wdes-clientarea-panel-block panel panel-default ">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <div className="pull-right"><Link onClick={() => error()} className="btn btn-default btn-xs">Fazer Candidatura</Link></div>
                    As tuas Candidaturas
                  </h3>
                </div>
                <div className="list-group">
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
  </>;
}

export default index;