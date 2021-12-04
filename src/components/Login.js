import React, {useState, useContext} from 'react';
import jwt from 'jwt-decode'
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import { Link, useNavigate } from "react-router-dom";

import {UserContext} from '../Contexts/UserContext';
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate()

    const login = async e =>
    {
        e.preventDefault();
        if(username.trim() !== "" && password.trim() !== "")
        {
            setUser({username: '', token: ''});
            var LoginUser = {
                username: username,
                password: password
            }
            const headers = {
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin":"Origin", 
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            }
            await axios.post(`http://localhost:38085/api/user/login`, LoginUser, {headers: headers})
            .then(res => {
                if(res.status === 200)
                {
                    //send a request and check if's ok
                    //const tokenPayload = parseJwt(res.data);
                    const decodedToken = jwt(res.data);
                    console.log("Token 1: ", decodedToken);
                    

                    var currentUser = {
                        username: '',
                        token: res.data
                    }
                    setUser(currentUser);
                    console.log("User: ", user);
                    navigate('/', { state: {loggedIn: true, menu:"main"} });
                }
                else
                {
                    console.log("Status was not OK");
                }
            })
        }
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
