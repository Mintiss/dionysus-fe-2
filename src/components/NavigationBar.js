import { useContext } from 'react';
import logo from '../images/dionysus-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Contexts/UserContext';
import Notifications from './Notifications';


const NavigationBar = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate() 


    const logout = async e => {
        e.preventDefault();
        window.sessionStorage.removeItem('token');
        setUser({ username: '', role: '' });
        navigate('/')
    }

    return (
        <Navbar bg="black" expand="lg" variant='dark'>
            <Container className='m-auto w-100'>

                <Navbar.Brand onClick={() => {
                    navigate('/main/batches')
                }}>
                    <img
                        src={logo}
                        height='50px'
                        className="d-inline-block align-top"
                        alt="Brand logo"

                    />
                </Navbar.Brand>

                {(user.role === 'Winemaker' || user.role === 'Administrator') && <Notifications />}

                {window.sessionStorage.getItem('token') !== null && <>
                    <Nav.Link className='text-white' onClick={() => {
                        navigate('/main/batches')
                    }}>Browse Wine</Nav.Link>

                    {(user.role === 'Winemaker' || user.role === 'Administrator') &&<Nav.Link className='text-white' onClick={() => {
                        navigate('/main/create-batch')
                    }}>Create Batch</Nav.Link>}

                    {user.role === 'Administrator' && <Nav.Link className='text-white' onClick={() => {
                        navigate('/main/admin-dashboard')
                    }}>Admin Dashboard</Nav.Link>}
                </>}

                <span className="navbar-text">{user.username} {user.role}</span>


                {window.sessionStorage.getItem('token') !== null && <button onClick={logout} className='btn text-white bg-purple m-1' >Logout</button>}


            </Container>
        </Navbar>
    )
}

export default NavigationBar
