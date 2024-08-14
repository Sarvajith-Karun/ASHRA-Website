import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-[#DAA520] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">ASHRA</h1>
            <p className="text-gray-400">
              Empowering orphanages and families in South Asia with essential resources and hope for a brighter future.
            </p>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">PAGES</h2>
              <ul className="space-y-1">
                <li><a href="/" className="hover:text-black">Home</a></li>
                <li><a href="/resources" className="hover:text-black">Resources</a></li>
                <li><a href="/team" className="hover:text-black">Get Involved</a></li>
                <li><a href="/contact" className="hover:text-black">Contact</a></li>
              </ul>
            </div>

            <div className="w-full sm:w-1/3 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">SOCIALS</h2>
              <ul className="space-y-1">
                <li><a href="https://www.instagram.com/ashra.corp/?igsh=aTNxcmg2YzA3bTVx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-black">Instagram</a></li>
                <li><a href="mailto:ashracorporations@gmail.com" className="hover:text-black">Email</a></li>
              </ul>
            </div>

            <div className="w-full sm:w-1/3">
              <h2 className="text-lg font-semibold mb-2">CONTACT INFORMATION</h2>
              <ul className="space-y-1">
                <li>Email: <a href="mailto:ashracorporations@gmail.com" className="hover:text-black">ashracorporations@gmail.com</a></li>
                <li>Phone: <a href="tel:+1234567890" className="hover:text-black">+123 456 7890</a></li>
                <li>Address: 123 Hope Street, City, Country</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8">
          <span>© 2024 ASHRA. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;