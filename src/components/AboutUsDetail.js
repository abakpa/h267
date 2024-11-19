// components/AboutUsDetail.js
import React from 'react';
import aboutImage from '../components/images/about1.jpeg';
import missionImage from '../components/images/mission 2.jpeg';
import visionImage from '../components/images/vison.jpeg';
import valueImage from '../components/images/value 2.jpeg';
import client1 from '../components/images/rekitt2.png';
import client2 from '../components/images/gapuma.jpeg';
import client3 from '../components/images/jebsen.svg';
import client4 from '../components/images/nycil.png';

function AboutUsDetail() {
    return (
        <section className="space-y-10">
            {/* Full-Screen Introduction with Background Image */}
            <div
                className="mt-8 relative bg-cover bg-center min-h-screen flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${aboutImage})`
                }}
            >
                <div className="bg-black bg-opacity-50 p-8 w-full max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg">
                        Welcome to Vinmoore ventures! We are a leading supplier and importer of high-quality chemicals for various industries.
                        incorporated as a private limited liability company on November 20th, 1998.
                        With years of experience and a commitment to quality, we strive to meet the needs of our customers and contribute to
                        the advancement of science and industry.
                    </p>
                </div>
            </div>

                
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 px-6 mr-4 ml-4 lg:ml-20 lg:mr-20">
                <img
                    src={missionImage}
                    alt="Mission"
                    className="w-full lg:w-1/3 h-64 object-cover rounded-lg mb-4 lg:mb-0"
                />
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-darkPurple mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                    To provide qualitative and reliable services to the satisfaction of our customers and creating values for all stakeholders by deploying effective management system and modern facilities managed by qualified personnel
                    </p>
                </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-6 px-6 mr-4 ml-4 lg:ml-20 lg:mr-20">
                <img
                    src={visionImage}
                    alt="Vision"
                    className="w-full lg:w-1/3 h-64 object-cover rounded-lg mb-4 lg:mb-0"
                />
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-darkPurple mb-4">Our Vision</h2>
                    <p className="text-gray-700 mr-6">
                        Our vision is to be the most trusted chemical supplier, empowering industries to innovate and excel. We
                        aspire to set new standards for reliability and quality in the chemical supply industry worldwide.
                    </p>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 px-6 mr-4 ml-4 lg:ml-20 lg:mr-20 pb-10">
                <img
                    src={valueImage}
                    alt="Core Values"
                    className="w-full lg:w-1/3 h-64 object-cover rounded-lg mb-4 lg:mb-0"
                />
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-darkPurple mb-4">Our Core Values</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and respect.</li>
                    <li><strong>Loyalty:</strong> We are committed to building lasting relationships based on trust and reliability.</li>
                    <li><strong>Customer Focus:</strong> Our clients are at the center of everything we do.</li>
                    <li><strong>Passion for Standards:</strong> We are dedicated to maintaining the highest standards in all our products and services.</li>
                    <li><strong>Innovation:</strong> We embrace new ideas and continually seek improvement.</li>

                    </ul>
                </div>
            </div>
                {/* Clients and Partners Section */}
                <div className="px-6 py-10 bg-gray-100">
                <h2 className="text-2xl font-semibold text-darkPurple text-center mb-6">Our Clients and Partners</h2>
                <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                    We are proud to collaborate with top companies and organizations across various industries. Our clients and partners
                    trust us to provide high-quality chemicals that meet their specific needs.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <img src={client1} alt="Client 1" className="h-24 object-contain mx-auto" />
                    <img src={client2} alt="Client 2" className="h-24 object-contain mx-auto" />
                    <img src={client3} alt="Client 3" className="h-24 object-contain mx-auto" />
                    <img src={client4} alt="Client 4" className="h-24 object-contain mx-auto" />
                    {/* Add more clients/partners as needed */}
                </div>
            </div>
        </section>
    );
}

export default AboutUsDetail;
