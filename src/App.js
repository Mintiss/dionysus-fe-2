import bgImage from './images/background.jpg'
import NavigationBar from './components/NavigationBar';
import { Outlet, useLocation } from 'react-router';
import WelcomeScreen from './components/WelcomeScreen';
import AdminDashboard from './components/AdminDashboard';
import { LocationContext } from './Contexts/LocationContext';
import { useContext, useState } from 'react'
import WineBatchesScreen from './components/WineBatchesScreen';
import Authenticator from './components/Authenticator';
import { UserContext } from './Contexts/UserContext';
import MainLayout from './components/MainLayout';
import { Navigate } from 'react-router-dom'


const background = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  left: "0",
  overflow: 'auto',
  textAlign: 'center'
}

function App({page}) {
  const {user} = useContext(UserContext)
  const [currentPage] = useState(page)

  return (
    <div style={background}>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
