import React from 'react'
import Card from 'react-bootstrap/Card'
import Login from './Login'
import Signup from './Signup'
import { useState } from 'react'
import bgImage from '../images/background.jpg'
import Chart from './Chart'

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

const Authenticator = () => {
    const [menu, setMenu] = useState('Login')

    return (
        <div style={background}>
            <Card className='bg-background w-50 m-auto mt-5 border'>
                <Card.Header className='h4'>Welcome to Dionysus</Card.Header>
                <Card.Body>

                    {menu === 'Login' && <Login />}
                    {menu === 'Register' && <Signup />}

                    {menu === 'Login' && <span>Don't have an account? <u onClick={() => setMenu('Register')}>Sign up</u></span>}
                    {menu === 'Register' && <span>Alreay have an account? <u onClick={() => setMenu('Login')}>Log in</u></span>}
                </Card.Body>
            </Card >

        </div>

    )
}

export default Authenticator
