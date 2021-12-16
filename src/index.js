import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import Authenticator from './components/Authenticator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard';
import { UserProvider } from './Contexts/UserContext';
import WineBatchesScreen from './components/WineBatchesScreen';
import { Navigate } from 'react-router-dom'
import CreateBatch from './components/CreateBatch';
import SingleBatch from './components/SingleBatch';


ReactDOM.render(
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/auth' />} />
          <Route path="auth" element={<Authenticator />} />

          <Route path='main' element={<App />} >
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="batches" element={<WineBatchesScreen />} />
            <Route path="create-batch" element={<CreateBatch />} />
          </Route>

          <Route path="batch" element={<App />} >
              <Route path=":batch_id" element={<SingleBatch />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>,
  document.getElementById('root')
);
