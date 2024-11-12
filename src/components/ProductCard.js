// components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 sm:h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">{product.description}</p>
        </div>
    );
}

export default ProductCard;
