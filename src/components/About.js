// components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section id="about" className="py-16 px-6 bg-gray-50 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-darkPurple">About Us</h2>
            <p className="mt-4 text-sm md:text-base text-gray-700 mx-auto max-w-xl">
                Kamsy Chemicals is dedicated to providing high-quality chemical products for industrial and laboratory use. Our commitment is to deliver exceptional service and reliable products that meet our customers’ needs.
            </p>
            <div>
            <button className="mt-6 px-6 md:px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            <Link to="/about" className="hover:text-blue-300">
                    View more About us
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default About;
