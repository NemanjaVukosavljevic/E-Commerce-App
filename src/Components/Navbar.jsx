import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">SmartBuyHub</Link>
        <div className="flex items-center">
          <Link to="/cart" className="relative text-white mr-6">
            <img className='h-8 w-8' src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" />
            {cartItemCount > 0 && <span className="absolute bottom-[-10px] left-[-10px] bg-red-500 rounded-full text-white px-2">{cartItemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
