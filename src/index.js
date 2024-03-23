import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import TopCoins from './components/TopCoins';
import Market from './components/Market';
import About from './components/About';
import JoinUs from './components/JoinUs';
import Loader from './components/Loader';
import './index.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    <React.StrictMode>
      <div className="app-container">
        {loading ? (
          <Loader onFinish={handleLoadingFinish} />
        ) : (
          <>
            <Header />
            <WelcomePage />
            <TopCoins />
            <Market />
            <About />
            <JoinUs />
          </>
        )}
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById('root');
createRoot(root).render(<App />);
