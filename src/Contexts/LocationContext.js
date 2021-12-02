import {useState, createContext} from 'react';

export const LocationContext = createContext();

export const LocationProvider = (props) =>
{
    const [location, setLocation] = useState({location: 'main'});

    return <LocationContext.Provider value = {{location: location, setUser: setLocation}}>
        {props.children}
        </LocationContext.Provider>;
}