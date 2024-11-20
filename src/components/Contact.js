// components/Contact.js
import React from 'react';

function Contact() {
    return (
        <section id="contact" className="py-16 px-6 bg-gray-50 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-darkPurple">Contact Us</h2>
            <p className="mt-4 text-sm md:text-base text-gray-700">Get in touch with us for more information.</p>
            <form className="mt-8 max-w-md mx-auto">
                <input type="text" placeholder="Name" className="w-full p-2 mb-4 border border-gray-300 rounded text-sm md:text-base" />
                <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300 rounded text-sm md:text-base" />
                <textarea placeholder="Message" className="w-full p-2 mb-4 border border-gray-300 rounded text-sm md:text-base"></textarea>
                <button className="w-full px-4 py-2 bg-menuColor text-brandColor rounded hover:bg-brandColor hover:text-menuColor text-sm md:text-base">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;
