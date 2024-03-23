import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './css/header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  };

  return (
    <div className="container mx-auto">
      <nav className="flex flex-wrap justify-between p-10 items-center">
        <div className="flex flex-shrink-0 mr-6">
          <span className="font-bold text-3xl md:text-5xl title">CryptoFunk</span>
        </div>
        <div className="lg:hidden">
          <button
            className="flex items-center rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon className='button-open-close' icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto gap-4">
          <ul className="flex flex-col items-start lg:flex-row lg:space-x-6">
            <li><a href="#home" className="text-white font-semibold hover:text-gray-300 text-4xl header-text" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#market" className="text-white font-semibold hover:text-gray-300 text-4xl header-text" onClick={() => scrollToSection('market')}>Market</a></li>
            <li><a href="#about" className="text-white font-semibold hover:text-gray-300 text-4xl header-text" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#join-us" className="text-white font-semibold hover:text-gray-300 text-4xl header-text" onClick={() => scrollToSection('join-us')}>Join Us</a></li>
          </ul>
          <div className="flex items-center mt-4 lg:mt-0">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white mr-4 text-lg">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white hover:text-purple-500 cursor-pointer" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl text-white hover:text-blue-400 cursor-pointer" />
            </a>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900  flex justify-center items-center">
            <div className="lg:hidden flex flex-col items-center justify-center gap-4">
              <button
                className="block lg:hidden flex items-center rounded text-white border-white hover:text-gray-300 hover:border-gray-300 absolute top-0 right-0 m-4"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon className='button-open-close' icon={faTimes} />
              </button>
              <ul className="flex flex-col items-start lg:flex-row lg:space-x-6">
                <li><a href="#home" className="text-white font-semibold hover:text-gray-300 text-lg header-text" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#market" className="text-white font-semibold hover:text-gray-300 text-lg header-text" onClick={() => scrollToSection('market')}>Market</a></li>
                <li><a href="#about" className="text-white font-semibold hover:text-gray-300 text-lg header-text" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#join-us" className="text-white font-semibold hover:text-gray-300 text-lg header-text" onClick={() => scrollToSection('join-us')}>Join Us</a></li>
              </ul>
              <div className="flex items-center mt-4 lg:mt-0">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white mr-4 text-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white hover:text-purple-500 cursor-pointer" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl text-white hover:text-blue-400 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
