// components/Navbar.js
import React from 'react';
import logo from '../components/images/kamsy-logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-darkPurple text-white py-4 z-10">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
            <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-blue-300">
            <img src={logo} alt="Kamsy Chemicals" className="w-28 h-10 space-y-2" />
            </Link>
            </h1>
                <div className="space-x-4 mt-2 md:mt-0 flex flex-wrap">
                <Link to="/" className="hover:text-blue-300">Home</Link>
                <Link to="/products" className="hover:text-blue-300">Products</Link>
                <Link to="/about" className="hover:text-blue-300">About</Link>
                <Link to="/team" className="hover:text-blue-300">Team</Link>
                <Link to="/contact" className="hover:text-blue-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;




