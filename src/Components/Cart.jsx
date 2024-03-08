// components/Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Empty Cart</p>
      ) : (
        <>
          <ul className="grid grid-cols-1 gap-4">
            {cartItems.map(item => (
              <li key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
                      Remove
                    </button>
                  </div>
                  <img src={item.image} alt={item.title} className="w-full h-48 object-contain" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Order Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
