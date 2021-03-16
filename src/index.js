import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './components/Auth/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <AuthProvider />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
