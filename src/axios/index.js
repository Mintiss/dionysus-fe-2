import axios  from "axios";

let headers = {
    'Content-type': 'application/json',
    "Access-Control-Allow-Origin":"Origin", 
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Authorization": `Bearer ${window.sessionStorage.getItem('token')}` 
};

export default axios.create({
    baseURL: 'http://localhost:38085/api',
    headers: headers
})

    