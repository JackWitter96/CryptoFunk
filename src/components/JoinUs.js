import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../index.css';
import './css/joinUs.css';

function JoinUs() {

    return (
        <>
            <div id="join-us">
                <div className="flex flex-col items-center justify-center join-us p-10">
                    <div className="w-1/2 text-center join-us">
                        <h2 className="font-bold text-6xl pb-10 header">Join Us Today!</h2>
                        <p className="text-lg text-white join-us-text">
                            Are you ready to embark on an exciting journey in the world of cryptocurrency? Join our team at CryptoFunk and be part of a dynamic community dedicated to empowering individuals with the knowledge and tools to navigate the crypto landscape.
                        </p>
                        <p className="text-3xl text-white mt-4 join-us-text">
                            Follow our socials to stay up to date.
                        </p>
                        <div className="flex justify-center items-center mt-8">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                <FontAwesomeIcon icon={faFacebook} className="text-4xl text-white hover:text-blue-500 cursor-pointer" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                <FontAwesomeIcon icon={faInstagram} className="text-4xl text-white hover:text-purple-500 cursor-pointer" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                <FontAwesomeIcon icon={faTwitter} className="text-4xl text-white hover:text-blue-400 cursor-pointer" />
                            </a>
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faDiscord} className="text-4xl text-white hover:text-gray-400 cursor-pointer" />
                            </a>
                        </div>

                    </div>
                </div>
                <div className="flex p-5">
                    <div className="w-1/2 flipped-image">
                        <img src="./images/joinUs/rocket.png" alt="Rocket" className="h-48 w-auto mx-auto image" />
                    </div>
                    <div className="w-1/2">
                        <img src="./images/joinUs/dots.png" alt="Rocket" className="h-48 w-auto mx-auto image" />
                    </div>
                    <div className="w-1/2">
                        <img src="./images/joinUs/rocket.png" alt="Rocket" className="h-48 w-auto mx-auto image" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default JoinUs;
