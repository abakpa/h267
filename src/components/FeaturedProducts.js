// components/FeaturedProducts.js
import React from 'react';
import ProductCard from './ProductCard';
import sodiumhydroxide from '../components/images/sodium hydroxide.webp'
import aceticacid from '../components/images/acetic-acid-2.jpeg'
import hydrochloricacid from '../components/images/hydrochloric-acid.jpeg'
import { Link } from 'react-router-dom';

function FeaturedProducts() {
    const products = [
        { id: 1, name: "Sodium Hydroxide", description: "Used in various industrial applications", image: sodiumhydroxide },
        { id: 2, name: "Acetic Acid", description: "High purity for laboratory use", image: aceticacid },
        { id: 3, name: "Hydrochloric Acid", description: "Widely used chemical in industries", image: hydrochloricacid },
    ];

    return (
        <section id="products" className="py-16 px-6 bg-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-darkPurple">Our Products</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div>
            <button className="mt-6 px-6 md:px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            <Link to="/products" className="hover:text-blue-300">
                    View more Products
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default FeaturedProducts;
