// components/Products.js
import React from 'react';
import sodiumhydroxide from '../components/images/sodium hydroxide.webp'
import aceticacid from '../components/images/acetic-acid-2.jpeg'
import hydrochloricacid from '../components/images/hydrochloric-acid.jpeg'
import { Link } from 'react-router-dom';


const productData = [
    { id: 1, name: "Sodium Hydroxide", description: "Used in various industrial applications", image: sodiumhydroxide },
    { id: 2, name: "Acetic Acid", description: "High purity for laboratory use", image: aceticacid },
    { id: 3, name: "Hydrochloric Acid", description: "Widely used chemical in industries", image: hydrochloricacid },
    { id: 4, name: "Sodium Hydroxide", description: "Used in various industrial applications", image: sodiumhydroxide },
    { id: 5, name: "Acetic Acid", description: "High purity for laboratory use", image: aceticacid },
    { id: 6, name: "Hydrochloric Acid", description: "Widely used chemical in industries", image: hydrochloricacid },
    { id: 7, name: "Sodium Hydroxide", description: "Used in various industrial applications", image: sodiumhydroxide },
    { id: 8, name: "Acetic Acid", description: "High purity for laboratory use", image: aceticacid },
    { id: 9, name: "Hydrochloric Acid", description: "Widely used chemical in industries", image: hydrochloricacid },
    { id: 10, name: "Sodium Hydroxide", description: "Used in various industrial applications", image: sodiumhydroxide },
    { id: 11, name: "Acetic Acid", description: "High purity for laboratory use", image: aceticacid },
    { id: 12, name: "Hydrochloric Acid", description: "Widely used chemical in industries", image: hydrochloricacid },
];
function Products() {
    return (
        <section className="min-h-screen bg-gray-100 py-10 px-6">
            <h1 className="text-3xl font-bold text-center text-darkPurple mt-20 mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productData.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <Link to={`/products/${product.id}`}>
                            <button className="mt-4 px-4 py-2 bg-brandColor text-white font-semibold rounded-lg hover:bg-darkPurple">
                                View Details
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
