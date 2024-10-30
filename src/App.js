import React from 'react';
import Timer from './components/Timer';
import { PomoProvider } from './context/PomoContext';
import FullscreenButton from './components/FullscreenButton';

function App() {
  return (
    <PomoProvider>
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/bg.jfif')`, // Public klasöründeki resim yolu
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='bg-white bg-opacity-0 p-6 rounded-lg '>
          <Timer />
          <FullscreenButton/>
        </div>
      </div>
    </PomoProvider>
  );
}

export default App;
