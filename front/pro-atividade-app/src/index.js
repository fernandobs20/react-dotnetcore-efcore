import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import 'bootswatch/dist/cosmo/bootstrap.min.css';  //lumen
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Menu/>
    <div className="container">
      <App />
    </div>
  </Router>,
  document.getElementById('root')
  
);