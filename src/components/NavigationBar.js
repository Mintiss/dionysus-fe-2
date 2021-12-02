import React, {useState, useContext} from 'react';
import logo from '../images/dionysus-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import { Link, useNavigate } from "react-router-dom";

import {UserContext} from '../Contexts/UserContext';
const NavigationBar = () => {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext);
    return (
        <Navbar bg="black" expand="lg" variant='dark'>
            <Container className='m-auto w-100'>

                <Navbar.Brand onClick={() => {
                    navigate('/')
                }}>
                    <img
                        src={logo}
                        height='50px'
                        className="d-inline-block align-top"
                        alt="Brand logo"

                    />
                </Navbar.Brand>

                <Nav.Link className='text-white' onClick={() => {
                    console.log('ass')
                }}>Dashboard</Nav.Link>

                <Nav.Link className='text-white' onClick={() => {
                    console.log('ass')
                }}>Browse Wine</Nav.Link>
                
                <Nav.Link className='text-white' onClick={() => {
                    console.log('ass')
                }}>Fuck Harry In The Ass</Nav.Link>

                <span class="navbar-text">
                    {user.username}
                </span>

                <Nav className="ml-auto">
                    <button onClick={() => {
                        navigate('/signup', { state: { loggedIn: false, menu: "auth" } })
                    }} className='btn text-white bg-purple m-1' >Sign Up</button>

                    <button onClick={() => {
                        navigate('/login', { state: { loggedIn: false, menu: "auth" } })
                    }} className='btn text-white bg-success m-1' >Login</button>

                </Nav>

            </Container>
        </Navbar>
    )
}

export default NavigationBar
