// components/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import contactImage from '../components/images/contact.webp'; // Add the actual image path
import contactImage2 from '../components/images/contact5.jpeg'; // Add the actual image path

function ContactUsDetail() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Send form data to the server
        await axios.post('http://localhost:3002/send-email', formData);
        
        // Show success alert without page navigation
        alert('Message sent successfully!');
        
        // Optionally reset the form fields
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      }
    };
    return (
        <section className="space-y-10">
            {/* Full-Screen Introduction with Background Image */}
            <div
                className=" mt-16 relative bg-cover bg-center min-h-screen flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${contactImage2})` // Replace with your actual background image URL
                }}
            >
                <div className="bg-black bg-opacity-50 p-8 w-full max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg">
                        We’d love to hear from you! Reach out to us with any inquiries, questions, or feedback, and our team will be happy to assist.
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="px-6 lg:px-24 flex flex-col lg:flex-row lg:space-x-10">
                {/* Left side: Contact Form */}
                <div className="flex-1 mt-6 mb-10 lg:mt-0">
                    <img
                        src={contactImage}
                        alt="Contact"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                {/* Right side: Contact Image */}
                <div className="flex-1 mb-10">
                    <h2 className="text-2xl font-semibold text-darkPurple mb-4">Get in Touch</h2>
                    <form id="contactForm" onSubmit={handleSubmit}>
      <div>
        <label for="name" class="block text-gray-700 font-semibold">Name</label>
        <input type="text" id="name" name="name"  value={formData.name} onChange={handleChange}  required class="w-full p-2 border border-gray-300 rounded"/>
      </div>
      <div>
        <label for="email" class="block text-gray-700 font-semibold">Email</label>
        <input type="email" id="email" name="email"  value={formData.email} onChange={handleChange} required class="w-full p-2 border border-gray-300 rounded"/>
      </div>
      <div>
        <label for="message" class="block text-gray-700 font-semibold">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required class="w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <button type="submit" class="bg-menuColor text-brandColor hover:bg-brandColor hover:text-menuColor py-2 px-4 rounded">Send Message</button>
    </form>
                </div>
              
            </div>
        </section>
    );
}

export default ContactUsDetail;
