import React from 'react'
import { useContext } from 'react';
import { PomoContext } from '../context/PomoContext'

function SessionLength() {
    const{sessionLength,setSessionLength} = useContext(PomoContext);

    const increaseSession = () =>{
        setSessionLength(prev => prev +1 );

    }

    const decreaseSession =() => {
        setSessionLength(prev => (prev > 1 ? prev- 1 : 1));
    }

    return (
        <div className="flex flex-col items-center">
            <div className="text-xl font-bold mt-8">Session Length</div>
            <div className="flex space-x-4 mt-2">
                <button 
                    onClick={decreaseSession} 
                    className="bg-white p-2 rounded-lg font-bold text-xl shadow-lg hover:opacity-80">
                    -
                </button>
                <span className="text-xl font-semibold">{sessionLength} Minutes</span>
                <button 
                    onClick={increaseSession} 
                    className="bg-white p-2 rounded-lg font-bold text-xl shadow-lg hover:bg-opacity-80">
                    +
                </button>
            </div>
        </div>
    );
}

export default SessionLength