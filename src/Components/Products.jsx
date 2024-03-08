import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortByPriceChange = (event) => {
    setSortByPrice(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  useEffect(() => {
    let sortedProducts = [...products];

    if (sortByPrice === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  }, [sortByPrice]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">{selectedCategory ? `${selectedCategory.charAt(0).toUpperCase()}${selectedCategory.slice(1)} Products` : 'All Products'}</h2>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="category" className="block mb-1">Filter by Category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="border border-gray-300 rounded-md px-4 py-2">
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sortByPrice" className="block mb-1">Sort by Price:</label>
          <select id="sortByPrice" value={sortByPrice} onChange={handleSortByPriceChange} className="border border-gray-300 rounded-md px-4 py-2">
            <option value="">Default</option>
            <option value="asc">Lowest to Highest</option>
            <option value="desc">Highest to Lowest</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white flex justify-between flex-col rounded-lg shadow-md overflow-hidden">
            <Link to={`/products/${product.id}`} className="block">
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
            <button onClick={() => handleAddToCart(product)} className="bg-blue-500 w-[35%] text-white py-2 px-4 mb-5 ml-3 rounded-b-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
