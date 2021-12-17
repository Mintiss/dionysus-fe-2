import React, { useState, useContext } from 'react';
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Contexts/UserContext';
import jwt from 'jwt-decode'
import axios from '../axios'

const Signup = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const {user, setUser} = useContext(UserContext);


    const Register = async e => {
        e.preventDefault();
        if (username === '' || typeof username !== 'string')
            return alert('Username invalid')
        if (password === '' || typeof password !== 'string')
            return alert('Password invalid')
        if (name === '' || typeof name !== 'string')
            return alert('Name invalid')
        if (repeatedPassword === '' || typeof repeatedPassword !== 'string')
            return alert('Repeated password invalid')
        if(password !== repeatedPassword) 
            return alert('Passwords must match')

        //send a request and check if's ok

        await axios.post(`/user/register`, {name: name, username: username, password: password})
            .then(res => {
                if(res.status === 200)
                {
                    window.sessionStorage.setItem('token', res.data)
                    //send a request and check if's ok
                    const decodedToken = jwt(res.data);
                    console.log(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
                    console.log(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
                    
                    var currentUser = {
                        username: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
                        role: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
                    }
                    setUser(currentUser);
                    console.log("User: ", user);
                    navigate('/main/batches');
                }
            }).catch(() => {
                alert('Register failed, username taken')
            })
    }

    return (
        <Form className='w-50 m-auto p-5'>

            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control className='bg-dark' type="text" onChange={(e) => setUsername(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control className='bg-dark' type="text" onChange={(e) => setName(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control className='bg-dark' type="password" onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Repeat Password" className="mb-3">
                <Form.Control className='bg-dark' type="password" onChange={(e) => setRepeatedPassword(e.target.value)} />
            </FloatingLabel>

            <button onClick={Register} className='btn text-white bg-purple m-1' >Register</button>
        </Form>
    )
}

export default Signup
