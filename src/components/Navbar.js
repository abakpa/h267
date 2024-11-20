// components/Navbar.js
import React from 'react';
import logo from '../components/images/h267logo.jpeg'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    return (
        <nav className="fixed top-0 w-full bg-brandColor text-white py-4 z-10">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
            <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-brandColor">
            <img src={logo} alt="Kamsy Chemicals" className="w-28 h-14 space-y-2" />
            </Link>
            </h1>
            <div className="space-x-4 mt-2 md:mt-0 flex flex-wrap">
            <Link
                to="/"
                className={`hover:text-menuColor ${isActive('/') ? 'text-menuColor' : ''}`}
            >
                Home
            </Link>
            <Link
                to="/products"
                className={`hover:text-menuColor ${isActive('/products') ? 'text-menuColor' : ''}`}
            >
                Products
            </Link>
            <Link
                to="/about"
                className={`hover:text-menuColor ${isActive('/about') ? 'text-menuColor' : ''}`}
            >
                About
            </Link>
            <Link
                to="/team"
                className={`hover:text-menuColor ${isActive('/team') ? 'text-menuColor' : ''}`}
            >
                Team
            </Link>
            <Link
                to="/contact"
                className={`hover:text-menuColor ${isActive('/contact') ? 'text-menuColor' : ''}`}
            >
                Contact
            </Link>
        </div>
            </div>
        </nav>
    );
}

export default Navbar;




