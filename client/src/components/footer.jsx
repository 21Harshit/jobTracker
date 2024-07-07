import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-600 to-green-400 text-black text-center py-3">
      <div className="container mx-auto">
        <div className="mb-2">
          <h1 className="text-xl font-bold">jobTracker</h1>
        </div>
        {/* <div className="mb-2">
          <nav>
            <ul className="flex justify-center space-x-8">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-gray-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-gray-300" />
          </a>
        </div>
        <p>&copy; 2024 jobTracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
