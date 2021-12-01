import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import Signup from './components/Signup';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
