import React, { useState, useEffect } from 'react';
import './css/loader.css';

const Loader = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFade(true);
        setTimeout(onFinish, 500);
      }, 2000);
    };

    const handleClick = () => {
      if (!fade) {
        setFade(true);
        setTimeout(onFinish, 500);
      }
    };

    window.addEventListener('load', handleLoad);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('click', handleClick);
    };
  }, [fade, onFinish]);

  return (
    <div className={`loader font-bold flex flex-col ${fade ? 'fade-out' : ''}`}>
      <h1>Welcome to CryptoFunk</h1>
      {!fade && <p className="click-instruction text-1xl text-white">Click to continue</p>}
    </div>
  );
};

export default Loader;
