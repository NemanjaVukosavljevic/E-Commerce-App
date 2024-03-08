// components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Product added to cart:', product);
  };

  return (
    <div className="container mx-auto py-8">
      {product ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="text-center">
            <img src={product.image} alt={product.title} className="mx-auto mt-4 mb-8 max-w-full h-auto" style={{ maxWidth: '300px' }} />
          </div>
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <p className="text-gray-800">{product.description}</p>
          </div>
          <div className="flex justify-center pb-4">
            <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add to Cart</button>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
