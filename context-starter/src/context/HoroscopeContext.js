import { createContext, useContext, useState } from 'react';
import horoscopeObj from '../data/horoscopes';

export const HoroscopeContext = createContext();

export const HoroscopeProv = (props) => {
    const [currSign, setCurrSign] = useState('Leo');

    return (
        <HoroscopeContext.Provider value={{currSign, setCurrSign, horoscopeObj}}>
            {props.children}
        </HoroscopeContext.Provider>
    )
}

export const useHoroscope = () => {
    return useContext(HoroscopeContext);
}
