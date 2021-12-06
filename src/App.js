import './App.css';
import bgImage from './images/background.jpg'
import NavigationBar from './components/NavigationBar';
import { Outlet, useLocation } from 'react-router';
import WelcomeScreen from './components/WelcomeScreen';
import AdminDashboard from './components/AdminDashboard';
import { LocationContext } from './Contexts/LocationContext';
import { useContext } from 'react'
import WineBatchesScreen from './components/WineBatchesScreen';

const background = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  left: "0",
  overflow: 'auto'
}

function App() {
  const locationContext = useContext(LocationContext)

  return (
    <div className="App" style={background}>
      <NavigationBar />
      {locationContext.location == 'main' && <WelcomeScreen />}
      <Outlet />
    </div>
  );
}

export default App;
