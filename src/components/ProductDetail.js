// components/ProductDetail.js
import React from 'react';
import sodiumhydroxide from '../components/images/sodium hydroxide.webp'
import aceticacid from '../components/images/acetic-acid-2.jpeg'
import hydrochloricacid from '../components/images/hydrochloric-acid.jpeg'
import { useParams } from 'react-router-dom';

const productData = [
    { 
        id: 1, 
        name: "Sodium Hydroxide", 
        description: "Used in various industrial applications Used in various industrial applications Used in various industrial applications Used in various industrial applications Used in various industrial applications Used in various industrial applications Used in various industrial applications Used in various industrial applications",
         image: sodiumhydroxide 
    },
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

function ProductDetail() {
    const { id } = useParams();
    const product = productData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p className="text-center mt-10">Product not found.</p>;
    }

    return (
        <section className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                <h1 className="text-2xl font-bold text-gray-800 mt-4">{product.name}</h1>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                    Buy Now
                </button>
            </div>
        </section>
    );
}

export default ProductDetail;
