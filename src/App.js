import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import './global.css';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
  <HashRouter>
  <Routes/>
  </HashRouter>
  );
}

export default App;
