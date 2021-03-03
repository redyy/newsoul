import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';

import Index from './pages/Inicio/Index';
import Login from './pages/Inicio/Login';
import Register from './pages/Inicio/Register';
import Dashboard from './pages/Dashboard/Index';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <PrivateRoute path="/dashboard" exact component={Dashboard}/>
      </Switch>
    </Router>
  )
}

export default Routes;