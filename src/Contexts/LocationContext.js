import {useState, createContext} from 'react';

export const LocationContext = createContext();

export const LocationProvider = (props) =>
{
    const [location, setLocation] = useState('main');

    return <LocationContext.Provider value = {{location, setLocation}}>
        {props.children}
        </LocationContext.Provider>;
}