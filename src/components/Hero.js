// components/Hero.js
import React from 'react';
import backgroundImage from '../components/images/homepage2.jpeg';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section 
            id="home" 
            className="bg-blue-100 min-h-screen flex items-center justify-center text-center px-6"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Welcome to Vinmoore ventures</h1>
                <p className="mt-4 text-base md:text-lg text-white">Your trusted source for quality chemicals</p>
                <button className="mt-6 px-6 md:px-8 py-3 bg-brandColor text-white font-semibold rounded-lg hover:bg-blue-600">
                <Link to="/products" className="hover:text-blue-300">
                    Explore Our Products
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default Hero;
