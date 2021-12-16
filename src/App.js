import bgImage from './images/background.jpg'
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router';


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

function App() {
  return (
    <div style={background}>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
