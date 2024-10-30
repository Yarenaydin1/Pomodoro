import React, { createContext, useState, useEffect, useCallback } from 'react';

const PomoContext = createContext();

function PomoProvider({ children }) {
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 dakika
    const [sessionLength, setSessionLength] = useState(25); 
    const [tasks, setTasks]=useState([]);

    
     const addTask = (task) =>{
        setTasks((prevTasks) => [...prevTasks,task]);

     };

     const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
     }
    
    const startStopTimer = () => {
        setIsRunning(prev => !prev);
    };

    const resetTimer = useCallback(() => {
        setIsRunning(false);
        setTimeLeft(sessionLength * 60); // Sıfırlama
    }, [sessionLength]); // sessionLength bağımlılığı

    // Geri sayım için useEffect
    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(interval); // Geri sayım bittiğinde durdur
                        return 0;
                    }
                });
            }, 1000); // Her saniyede bir güncelle

            return () => clearInterval(interval); // Component unmount olduğunda interval'i temizle
        }
    }, [isRunning]);

    // sessionLength değiştiğinde timeLeft'i güncelle
    useEffect(() => {
        resetTimer(); 
    }, [sessionLength, resetTimer]); 

    return (
        <PomoContext.Provider
            value={{
                isRunning,
                timeLeft,
                sessionLength,
                setSessionLength,
                startStopTimer,
                resetTimer,
                tasks,
                addTask,
                removeTask,
            }}
        >
            {children}
        </PomoContext.Provider>
    );
}

export { PomoContext, PomoProvider };
