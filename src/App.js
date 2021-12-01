import './App.css';
import bgImage from './images/background.jpg'
import NavigationBar from './components/NavigationBar';
import { Outlet, useLocation } from 'react-router';
import WelcomeScreen from './components/WelcomeScreen';

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
  const location = useLocation({})

  console.log(location.state)

  return (
    <div className="App" style={background}>
      <NavigationBar />
      {(location.state == null || location.state.menu) && <WelcomeScreen />}
      <Outlet />
    </div>
  );
}

export default App;
