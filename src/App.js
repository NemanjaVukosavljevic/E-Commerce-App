import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart'; 
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className='font'>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar cartItemCount={cartItems.length} />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Products addToCart={addToCart} />} />
                <Route path="/products" element={<Products addToCart={addToCart} />} />
                <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
