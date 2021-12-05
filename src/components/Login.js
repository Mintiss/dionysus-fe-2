import {useState, useContext} from 'react';
import jwt from 'jwt-decode'
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from '../Contexts/UserContext';    
import { LocationContext } from '../Contexts/LocationContext';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const {user, setUser} = useContext(UserContext);
    const {setLocation} = useContext(LocationContext)


    const navigate = useNavigate()

    const parseJwt = (token) => {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    const login = async e =>
    {
        e.preventDefault();
        if(username.trim() !== "" && password.trim() !== "")
        {
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
                    const decodedToken = jwt(res.data, { payload : true });
                    console.log("Token: ", decodedToken);
                    var currentUser = {
                        username: decodedToken['name'],
                        token: res.data
                    }
                    setUser(currentUser);
                    console.log("User: ", user);
                    navigate('/');
                }
                else
                {
                    console.log("Status was not OK");
                }
            })
        }
        // setUser(newUser);
        setLocation('main')
        navigate('/');
    }

    return (
        <Form className='w-50 m-auto p-5'>

            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control type="text" placeholder="Username"  onChange = {(e) => setUsername(e.target.value)}/>
            </FloatingLabel>


            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
            </FloatingLabel>

            <button onClick={login} className='btn text-white bg-purple m-1' >Login</button>

        </Form>

    )
}

export default Login
