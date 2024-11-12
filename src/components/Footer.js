// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-darkPurple text-white py-4 text-center">
            <p>© 2024 Kamsy Chemicals. All rights reserved.</p>
            <div className="mt-2 space-x-4">
            <Link to="/" className="hover:text-blue-300">Home</Link>
                <Link to="/products" className="hover:text-blue-300">Products</Link>
                <Link to="/about" className="hover:text-blue-300">About</Link>
                <Link to="/contact" className="hover:text-blue-300">Contact</Link>
            </div>
        </footer>
    );
}

export default Footer;
