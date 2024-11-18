// src/components/Team.js
import React from 'react';
import research from '../components/images/R&D.jpeg';
import sales from '../components/images/S&M2.jpeg';
import operations from '../components/images/OPERATIONS2.jpeg';
import support from '../components/images/contact2.avif';
import ceo from '../components/images/kamsy ceo.png';

function Team() {
    const departments = [
        {
            name: "Research and Development",
            description: "Focuses on creating innovative solutions and improving existing products.",
            image: research, // Replace with the actual image path
        },
        {
            name: "Sales and Marketing",
            description: "Responsible for promoting products and building customer relationships.",
            image: sales, // Replace with the actual image path
        },
        {
            name: "Operations",
            description: "Ensures smooth day-to-day business activities and logistics management.",
            image: operations, // Replace with the actual image path
        },
        {
            name: "Customer Support",
            description: "Provides assistance and solutions to our valued customers.",
            image: support, // Replace with the actual image path
        },
    ];

    return (
        <div className="container mx-auto py-12 mt-14">
            <h1 className="text-4xl font-bold text-center text-darkPurple mb-6">Meet Our Team</h1>
            <p className="text-lg text-gray-700 text-center mb-4">
                Learn more about the visionaries and dedicated professionals behind Kamsy Chemicals.
            </p>

            {/* Founder/CEO Section */}
            <div className="text-center mb-12">
                <img
                    src={ceo}
                    alt="Founder/CEO"
                    className="w-32 h-32 mx-auto rounded-full"
                />
                <p className="text-xl font-semibold mt-2">Mr. Francis Ofurum</p>
                <h2 className="text-sm font-semibold">Founder/CEO</h2>
                <p className="text-gray-700 mx-8 text-justify leading-relaxed md:leading-loose tracking-wide md:text-sm">
    Mr. Francis Ofurum, the Founder and Chief Executive Officer (CEO) of Kamsy Chemicals & Allied Products Limited, is a visionary entrepreneur and an exemplary leader with a profound passion for the chemical industry. With over a decade of experience, Mr. Ofurum has played a pivotal role in revolutionizing the importation and distribution of chemical raw materials in Nigeria. From the inception of Kamsy Chemicals in 2009, Mr. Ofurum has steered the company with a commitment to innovation, integrity, and customer satisfaction. Under his leadership, Kamsy Chemicals has grown from a budding enterprise to a recognized player in the chemical industry, known for its high-quality products and excellent service delivery. Mr. Ofurum’s dedication to excellence and his in-depth understanding of the industry have enabled the company to establish strong partnerships with international manufacturers and suppliers, ensuring that clients receive only the best chemical raw materials for their needs. His strategic vision has not only driven the company’s success but has also inspired a team of professionals who share his passion for quality and sustainability. Beyond his role at Kamsy Chemicals, Mr. Ofurum is deeply committed to contributing to societal development. He believes in empowering communities through job creation and ensuring that businesses operate ethically and responsibly. As a leader, Mr. Francis Ofurum continues to set benchmarks in the chemical industry, driving Kamsy Chemicals towards new heights and solidifying its reputation as a trusted and innovative organization.
</p>


            </div>

            {/* Departments Section */}
            <h2 className="text-3xl font-semibold text-center text-darkPurple mb-8">
                Our Departments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map((department, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={department.image}
                            alt={department.name}
                            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-darkPurple mb-2">{department.name}</h3>
                        <p className="text-gray-600">{department.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
