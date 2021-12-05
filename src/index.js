import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard';
import { LocationProvider } from './Contexts/LocationContext';
import { UserProvider } from './Contexts/UserContext';
import WineBatchesScreen from './components/WineBatchesScreen';


ReactDOM.render(
  <LocationProvider>
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} >
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="wine-batches" element={<WineBatchesScreen />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  </LocationProvider>,
  document.getElementById('root')

);
