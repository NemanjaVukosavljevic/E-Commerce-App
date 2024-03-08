import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <p className="mb-4 ">&copy; 2024 Your Company</p>
        <div className="flex justify-center">
          <Link to="/privacy-policy" className="mr-4">Privacy Policy</Link>
          <Link to="/terms-of-service" className="mr-4">Terms of Service</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
