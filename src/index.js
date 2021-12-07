import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import Authenticator from './components/Authenticator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard';
import { LocationProvider } from './Contexts/LocationContext';
import { UserProvider } from './Contexts/UserContext';
import WineBatchesScreen from './components/WineBatchesScreen';
import { Navigate } from 'react-router-dom'
import CreateBatch from './components/CreateBatch';

console.log(window.sessionStorage.getItem('token'))


ReactDOM.render(
  <LocationProvider>
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/auth' />} />
          <Route path="auth" element={<Authenticator/>} />


          <Route path='/main' element={<App/>} >
            <Route path="admin-dashboard" element={<AdminDashboard/>} />
            <Route path="batches" element={<WineBatchesScreen/>} />
            <Route path="create-batch" element={<CreateBatch/>} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  </LocationProvider>,
  document.getElementById('root')

);
