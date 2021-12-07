import { useContext } from 'react';
import logo from '../images/dionysus-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from "react-router-dom";
import { LocationContext } from '../Contexts/LocationContext';
import { UserContext } from '../Contexts/UserContext';


const NavigationBar = () => {
    const { user, setUser } = useContext(UserContext)

    const { setLocation } = useContext(LocationContext)

    console.log('lstorage', window.sessionStorage.getItem('token'))
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
                    navigate('/main')
                }}>
                    <img
                        src={logo}
                        height='50px'
                        className="d-inline-block align-top"
                        alt="Brand logo"

                    />
                </Navbar.Brand>

                {user.username !== '' && <>
                    <Nav.Link className='text-white' onClick={() => {
                        navigate('/main/batches')
                    }}>Browse Wine</Nav.Link>

                    <Nav.Link className='text-white' onClick={() => {
                        navigate('/main/create-batch')
                    }}>Create Batch</Nav.Link>

                    <Nav.Link className='text-white' onClick={() => {
                        navigate('/main/admin-dashboard')
                    }}>Admin Dashboard</Nav.Link>
                </>}

                <span className="navbar-text">
                    {user.username}
                    {user.role}
                </span>


                {user.username !== '' && <button onClick={logout} className='btn text-white bg-purple m-1' >Logout</button>}


            </Container>
        </Navbar>
    )
}

export default NavigationBar
