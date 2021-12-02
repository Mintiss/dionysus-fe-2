import {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) =>
{
    const [user, setUser] = useState
    ({
        username: 'Harry99',
        name: 'Harry',
        token: ''
    });

    return <UserContext.Provider value = {{user, setUser}}>
        {props.children}
        </UserContext.Provider>;
}