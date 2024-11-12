import React from 'react';
// import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import FeaturedProducts from './FeaturedProducts';
import Contact from './Contact';
// import Footer from './Footer';

const Home = () =>{
    return (
        <div className="App">
            {/* <Navbar /> */}
            <div className="pt-16 pb-16"> {/* Add padding here to prevent overlap */}
                <Hero />
                <About />
                <FeaturedProducts />
                <Contact />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;