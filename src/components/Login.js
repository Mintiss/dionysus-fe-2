import {useState, useContext} from 'react';
import jwt from 'jwt-decode'
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { useNavigate } from "react-router-dom";
import {UserContext} from '../Contexts/UserContext';    
import axios from '../axios';

const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const {setUser} = useContext(UserContext);

    const navigate = useNavigate()
    const login = async e =>
    {
        e.preventDefault();
        setUser({username: '', role: ''});
        window.sessionStorage.removeItem('token');
        
        if(username.trim() !== "" && password.trim() !== "")
        {
            
            await axios.post(`/user/login`, {username: username, password: password})
            .then(res => {
                if(res.status === 200)
                {
                    window.sessionStorage.setItem('token', res.data)
                    const decodedToken = jwt(res.data);
                    
                    const currentUser = {
                        username: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
                        role: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
                    }
                    setUser(currentUser)
                    navigate('/main/batches');
                }
            }).catch(error => {
                alert("Failed to log in - " + error.message);
               
            })
        }
    }

    return (
        <Form className='w-50 m-auto p-5'>

            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control className='bg-dark' type="text" placeholder="Username"  onChange = {(e) => setUsername(e.target.value)}/>
            </FloatingLabel>


            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control className='bg-dark' type="password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
            </FloatingLabel>

            <button onClick={login} className='btn text-white bg-purple m-1' >Login</button>
        </Form>
        
    )
}

export default Login
