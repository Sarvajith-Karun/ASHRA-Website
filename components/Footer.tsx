import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-[#DAA520] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-8">

          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col">
            <h1 className="text-3xl font-bold mb-2">ASHRA</h1>
            <p className="text-gray-600">
              We are committed to providing essential support and resources to orphanages and impoverished families across South Asia.
            </p>
          </div>


          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col md:mx-6">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-black">Home</a></li>
              <li><a href="/about" className="hover:text-black">About Us</a></li>
              <li><a href="/events" className="hover:text-black">Get Involved</a></li>
              <li><a href="/contact" className="hover:text-black">Updates</a></li>
            </ul>
          </div>


          <div className="w-full md:w-1/3 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">Email: <a href="mailto:ashracorporations@gmail.com" className="hover:text-black">ashracorporations@gmail.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-black">+123 456 7890</a></p>
            <p>Address: 123 Street Lane, City, Country</p>
          </div>
        </div>


        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://www.instagram.com/ashra.corp/?igsh=aTNxcmg2YzA3bTVx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-black">
            <FaInstagram size={20} />
          </a>
          <a href="mailto:ashracorporations@gmail.com" className="text-[#DAA520] hover:text-black">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;