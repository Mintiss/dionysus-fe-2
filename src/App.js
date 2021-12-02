import './App.css';
import bgImage from './images/background.jpg'
import NavigationBar from './components/NavigationBar';
import { Outlet, useLocation } from 'react-router';
import WelcomeScreen from './components/WelcomeScreen';
import { UserProvider } from './Contexts/UserContext';
import AdminDashboard from './components/AdminDashboard';
import { LocationContext } from './Contexts/LocationContext';
import {useContext} from 'react'

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
  const {setLocation} = useContext(LocationContext)

  console.log(LocationContext)
  
  return (
    <LocationContext>
      <UserProvider>
        <div className="App" style={background}>
          <NavigationBar />
          <WelcomeScreen />
          <Outlet />
        </div>
        <AdminDashboard />
      </UserProvider>
    </LocationContext>
  );
}

export default App;
