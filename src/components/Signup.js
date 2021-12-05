import React, {useState, useContext} from 'react';
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import {useNavigate} from "react-router-dom";
import { LocationContext } from '../Contexts/LocationContext';


import {UserContext} from '../Contexts/UserContext';
const Signup = () => {
    const {setLocation} = useContext(LocationContext)
    const navigate = useNavigate()

    const {setUser} = useContext(UserContext);

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [repeatedPassword, setRepeatedPassword] = useState(""); 

    const Register = e =>
    {
        e.preventDefault();
        //send a request and check if's ok
        console.log("Username: ", username);
        console.log("Password", password);
        console.log("Repeated password", repeatedPassword);
        console.log("Email", email);
        var newUser = {
            username: username,
            name: username,
            token: 'pipi'
        }
        setUser(newUser);
        setLocation('main')
        navigate('/');
    }

    return (
        <Form className='w-50 m-auto p-5'>

            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control type="text"  onChange = {(e) => setUsername(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" onChange = {(e) => setEmail(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" onChange = {(e) => setPassword(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Repeat Password" className="mb-3">
                <Form.Control type="password" onChange = {(e) => setRepeatedPassword(e.target.value)}/>
            </FloatingLabel>

            <button onClick={Register} className='btn text-white bg-purple m-1' >Register</button>
        </Form>
    )
}

export default Signup
