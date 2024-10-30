import React from 'react'
import { useContext } from 'react'
import { PomoContext } from '../context/PomoContext'
import Controls from './Controls'
import SessionLength from './SessionLength'


function Timer() {
const {timeLeft}= useContext(PomoContext)
const minutes = Math.floor(timeLeft/60);
const seconds = timeLeft % 60 ;


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
    <div className="bg-transparent rounded-lg  p-16 text-center ">
        <div className="text-8xl font-bold mb-6">
            <h1 className='text-xl p-1 '>Time to Focus !</h1>
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <Controls />
        <SessionLength/>
    </div>
</div>
);
}

export default Timer