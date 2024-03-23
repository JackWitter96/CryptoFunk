import React, { useState, useRef } from "react";
import '../index.css';
import './css/about.css';

function About() {


    const [selectedSection, setSelectedSection] = useState(null);
    const additionalInfoRef = useRef(null);

    const handleButtonClick = (section) => {
        setSelectedSection(selectedSection === section ? null : section);
        additionalInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && phoneNumber) {
            setSubmitted(true);
        }
    };

    return (
        <>
            <div id="about">
                <div>
                    <h2 className="text-center font-bold text-5xl pb-10 header">Our Mission</h2>
                </div>
                <div className="flex justify-center items-center text-white">
                    <div className="">
                        <img src="./images/about/running-bitcoin.png" className="flipped-image running-bitcoin" alt="Running Bitcoin" />
                    </div>
                    <div className="text-center text-2xl our-mission-text p-6">
                        <p>At CryptoFunk, our mission is to empower individuals with the knowledge, tools and resources they need to navigate the ever-evolving world of cryptocurrency. We believe that access to reliable information and user-friendly platforms is essential for fostering widespread adoption and understanding of digital assets.</p>
                    </div>
                    <div className="">
                        <img src="./images/about/running-bitcoin.png" alt="Running Bitcoin" className="running-bitcoin" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-8 p-4 text-white">
                    <div className="p-4 rounded-lg grid-container bg-gradient-to-b from-purple-500 to-purple-700">
                        <h3 className="font-bold text-xl mb-2">Buy Crypto</h3>
                        <p className="mt-2">
                            Buy BTC, ETH and other cryptocurrencies with GBP. Convenient and secure transactions.
                        </p>
                        <button onClick={() => handleButtonClick('buyCrypto')} className="mt-4 bg-white text-purple-700 py-2 px-4 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">{selectedSection === 'buyCrypto' ? 'Hide' : 'Learn More'}</button>
                    </div>
                    <div className="p-4 rounded-lg grid-container bg-gradient-to-b from-green-500 to-green-700">
                        <h3 className="font-bold text-xl mb-2">Sell Crypto</h3>
                        <p className="mt-2">
                            Guidance and assistance provided throughout the selling process. Turn your crypto into cash hassle-free.
                        </p>
                        <button onClick={() => handleButtonClick('sellCrypto')} className="mt-4 bg-white text-green-700 py-2 px-4 rounded-full hover:bg-green-600 hover:text-white transition duration-300">{selectedSection === 'sellCrypto' ? 'Hide' : 'Get Started'}</button>
                    </div>
                    <div className="p-4 rounded-lg grid-container bg-gradient-to-b from-blue-500 to-blue-700">
                        <h3 className="font-bold text-xl mb-2">Price Alerts</h3>
                        <p className="mt-2">
                            Set up real-time alerts to stay informed about price movements. Never miss a price swing again!
                        </p>
                        <button onClick={() => handleButtonClick('priceAlerts')} className="mt-4 bg-white text-blue-700 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">{selectedSection === 'priceAlerts' ? 'Hide' : 'Sign Up'}</button>
                    </div>
                </div>

                <div ref={additionalInfoRef} className=" text-white">
                    {selectedSection && (
                        <div>
                            {selectedSection === 'buyCrypto' && (
                                <div className="how-to mx-auto p-6">
                                    <div className="grid place-items-center p-4 border-2 border-white rounded-lg">
                                        <h2 className="text-xl font-bold mb-2">How to Buy Crypto:</h2>
                                        <ol className="list-decimal">
                                            <li>Create an account.</li>
                                            <li>Verify your identity.</li>
                                            <li>Select which crypto you would like to buy.</li>
                                            <li>Select amount.</li>
                                            <li>Select payment method.</li>
                                            <li>Submit.</li>
                                        </ol>
                                    </div>
                                </div>
                            )}
                            {selectedSection === 'sellCrypto' && (
                                <div className="how-to mx-auto p-6">
                                    <div className="grid place-items-center p-4 buy-crypto border-2 border-white rounded-lg">
                                        <h2 className="text-xl font-bold mb-2">How to Sell Crypto:</h2>
                                        <ol className="list-decimal pl-5">
                                            <li>Login to your account.</li>
                                            <li>Click "Wallet".</li>
                                            <li>Select which crypto you would like to sell.</li>
                                            <li>Click "Convert".</li>
                                            <li>Convert to GBP.</li>
                                            <li>Refresh your wallet.</li>
                                            <li>Select GBP.</li>
                                            <li>Click Sell.</li>
                                            <li>Select bank account.</li>
                                            <li>Submit.</li>
                                        </ol>
                                    </div>
                                </div>
                            )}
                            {selectedSection === 'priceAlerts' && (
                                <div className="how-to mx-auto p-6 input-div">
                                    <div className="p-4 border-2 border-white rounded-lg">
                                        <form onSubmit={handleSubmit}>
                                            <table className="mx-auto">
                                                <thead className="">
                                                    {submitted ? (
                                                        <tr>
                                                            <th className="px-4 py-2 text-center text-green-500">Alerts have been set up</th>
                                                        </tr>
                                                    ) : (
                                                        <tr>
                                                            <th className="px-4 py-2 text-center text-white">Sign up for alerts</th>
                                                        </tr>
                                                    )}
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center py-4">
                                                            <input
                                                                type="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                placeholder="Email"
                                                                className="rounded-lg py-2 px-4 text-black input"
                                                                required
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center py-4">
                                                            <input
                                                                type="tel"
                                                                value={phoneNumber}
                                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                                placeholder="Phone Number"
                                                                className="rounded-lg py-2 px-4 text-black input"
                                                                required
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="text-center mt-4">
                                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default About;
