import React, { useState } from 'react';

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
     
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <button
      className='fixed bottom-4 right-4 p-2  font-extrabold  shadow-lg text-4xl z-50'
      onClick={handleFullscreen}
    >
      {isFullscreen ? ' ⛶' : '⛶'}
    </button>
  );
};

export default FullscreenButton;
