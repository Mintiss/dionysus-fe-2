import logo from '../images/dionysus-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate()
    return (
        <Navbar bg="black" expand="lg" variant='dark'>
            <Container className='m-auto w-100'>

                <Navbar.Brand>
                    <img
                        src={logo}
                        height='50px'
                        className="d-inline-block align-top"
                        alt="Brand logo"
                    />
                </Navbar.Brand>

                <Nav className="ml-auto">
                    <button onClick={() => {
                        navigate('/signup', {state: true})
                    }} className='btn text-white bg-purple m-1' >Sign Up</button>
                    
                    <Link className='btn text-white bg-success m-1' to="/login">Log in</Link>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default NavigationBar
