import { useContext } from 'react';
import logo from '../images/dionysus-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from "react-router-dom";
import { LocationContext } from '../Contexts/LocationContext';
import { UserContext } from '../Contexts/UserContext';


const NavigationBar = () => {
    const userContext = useContext(UserContext)
    const { setLocation } = useContext(LocationContext)


    const navigate = useNavigate()
    return (
        <Navbar bg="black" expand="lg" variant='dark'>
            <Container className='m-auto w-100'>

                <Navbar.Brand onClick={() => {
                    setLocation('main')
                    navigate('/')
                }}>
                    <img
                        src={logo}
                        height='50px'
                        className="d-inline-block align-top"
                        alt="Brand logo"

                    />
                </Navbar.Brand>

                {userContext.user.token !== '' && <>
                    <Nav.Link className='text-white' onClick={() => {
                        setLocation('wine-batches')
                        navigate('/wine-batches')
                    }}>Browse Wine</Nav.Link>

                    <Nav.Link className='text-white' onClick={() => {
                        console.log('ass')
                    }}>Something else</Nav.Link>

                    <Nav.Link className='text-white' onClick={() => {
                        setLocation('admin-dashboard')
                        navigate('/admin-dashboard')
                    }}>Admin Dashboard</Nav.Link>
                </>}

                <span className="navbar-text">
                    {userContext.username}
                    {userContext.role}
                </span>

                {userContext.user.token === '' && <>
                    <Nav className="ml-auto">
                        <button onClick={() => {
                            setLocation('signup')
                            navigate('/signup', { state: { loggedIn: false, menu: "auth" } })
                        }} className='btn text-white bg-purple m-1' >Sign Up</button>

                        <button onClick={() => {
                            setLocation('login')
                            navigate('/login', { state: { loggedIn: false, menu: "auth" } })
                        }} className='btn text-white bg-success m-1' >Login</button>
                    </Nav>
                </>}

            </Container>
        </Navbar>
    )
}

export default NavigationBar
