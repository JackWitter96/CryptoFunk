import React from 'react';
import '../index.css';
import './css/welcome-page.css';

function WelcomePage() {
  const cryptoImages = [
    './images/logos/bitcoin.png',
    './images/logos/ethereum.png',
    './images/logos/tether-usdt.png',
    './images/logos/bnb.png',
    './images/logos/xrp.png',
    './images/logos/dogecoin.png',
  ];

  return (
    <div id='home' className="min-h-screen flex flex-col items-center justify-center welcome-page">
      <div className="border p-4 md:flex md:flex-row md:items-center">
        <div className="content-column text-center md:text-left md:w-1/2 md:pr-4">
          <div className="crypto-phrase pb-2">
            <span className="text-5xl font-bold white-text welcome-text">Welcome</span>
            <span className="text-5xl font-bold white-text welcome-text"> To</span>
            <span className="text-5xl font-bold crypto-text welcome-text"> CryptoFunk</span>
          </div>
          <div className="crypto-phrase pb-2">
            <span className="text-5xl font-bold crypto-text welcome-text">Crypto</span>
            <span className="text-5xl font-bold text-white welcome-text">'</span>
            <span className="text-5xl font-bold crypto-text welcome-text">s</span>
            <span className="text-5xl font-bold white-text welcome-text"> Infinite Possibilities</span>
          </div>
          <p className='text-5xl text-white font-bold p-1 welcome-text'>Unlocking the future</p>
          
          <div className="crypto-images-container-wrapper flex justify-center">
            <div className="crypto-images-container flex flex-wrap justify-center mt-4">
              {cryptoImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Crypto ${index + 1}`} className="crypto-image m-2 md:w-16 md:h-16" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img src='./images/moon/moon.png' alt="Moon" className="moon-image md:h-96" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
