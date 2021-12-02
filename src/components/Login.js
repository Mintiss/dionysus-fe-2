import React, {useState, useContext} from 'react';

import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import { Link, useNavigate } from "react-router-dom";

//import {UserContext} from '../Contexts/UserContext';
const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    //const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate()

    const login = e =>
    {
        e.preventDefault();
        //send a request and check if's ok
        console.log("Username: ", username);
        console.log("Password", password);
        navigate('/', { state: {loggedIn: true, menu:"main"} });
    }

    return (
        <Form className='w-50 m-auto p-5'>

            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control type="text" placeholder="Username"  onChange = {(e) => setUsername(e.target.value)}/>
            </FloatingLabel>


            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
            </FloatingLabel>

            <div className='custom-checkbox shadow-lg bg-background pt-2 pb-2 rounded shadow w-25 m-auto border '>
                {/* <Form.Check inline className='text-white' label='Remember me' /> */}

                {/* <Button variant="purple" type="submit">Register</Button> */}

                <button onClick={login} className='btn text-white bg-purple m-1' >Login</button>
            </div>

        </Form>
    )
}

export default Login
