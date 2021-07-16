import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from './context/authContext'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </Router>,
  document.getElementById('root')
);


