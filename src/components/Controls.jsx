
import React, { useContext } from 'react';
import { PomoContext } from '../context/PomoContext';

function Controls() {
  const { isRunning, startStopTimer, resetTimer } = useContext(PomoContext);

  return (
    <div className="flex justify-center mt-6 space-x-4">
            <button 
                onClick={startStopTimer} 
                className={`${
                    isRunning ? 'bg-gray-400' : 'bg-white'
                } text-black font-bold py-2 px-6 rounded-full   shadow-lg hover:opacity-50 transition`}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button 
                onClick={resetTimer} 
                className="bg-white text-black font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-50 transition">
                Reset
            </button>
        </div>
    );
}
export default Controls;
