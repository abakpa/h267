// components/Hero.js
import React from 'react';
import backgroundImage from '../components/images/homepage6.jpg';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section 
            id="home" 
            className="bg-blue-100 min-h-screen flex items-center justify-center text-center px-6"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Welcome to H267</h1>
                <p className="mt-4 text-base md:text-lg text-white">Your trusted source for quality chemicals</p>
                <button className="mt-6 px-6 md:px-8 py-3 bg-menuColor text-brandColor font-semibold rounded-lg hover:bg-brandColor hover:text-menuColor">
                <Link to="/products" >
                    Explore Our Products
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default Hero;
