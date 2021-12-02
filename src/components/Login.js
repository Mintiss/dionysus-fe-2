import React, {useState, useContext} from 'react';

import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import { Link, useNavigate } from "react-router-dom";

import {UserContext} from '../Contexts/UserContext';
const Login = () => {
    const [user, setUser] = useContext(useContext);

    const navigate = useNavigate()

    return (
        <Form className='w-50 m-auto p-5'>

            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control type="text" placeholder="" />
            </FloatingLabel>


            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <div className='custom-checkbox shadow-lg bg-background pt-2 pb-2 rounded shadow w-25 m-auto border '>
                {/* <Form.Check inline className='text-white' label='Remember me' /> */}

                {/* <Button variant="purple" type="submit">Register</Button> */}

                <button onClick={() => {
                        navigate('/', { state: {loggedIn: true, menu:"main"} })
                    }} className='btn text-white bg-purple m-1' >Login</button>
            </div>

        </Form>
    )
}

export default Login
