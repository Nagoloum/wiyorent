import React from 'react';
import Social from './SocialMediaButtons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 - Logo et description */}
          <div className="text-center md:text-left">
            <div className="max-w-40 mx-auto md:mx-0">
              <a href="/" className="flex justify-center md:justify-start items-center">
                <span className="w-32">
                  <img src="/ddc1.png" alt="WiyoRent Logo" className="w-full" />
                </span>
              </a>
            </div>
            <p className="mt-6 text-base leading-relaxed">
              WiyoRent Ltd is a dynamic real estate startup committed to providing exceptional housing solutions and comprehensive support services for Cameroonians and foreigners, with a specific focus on student housing.
            </p>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-6 mt-5">Quick Links</h5>
            <ul>
              <li className='mb-3'><a href="/" className="text-base hover:text-gray-300 text-gray-50">Home</a></li>
              <li className='mb-3'><a href="/#about" className="text-base hover:text-gray-300 text-gray-50">About</a></li>
              <li className='mb-3'><a href="/Autres_Services" className="text-base hover:text-gray-300 text-gray-50">Services</a></li>
              <li className='mb-3'><a href="/#contact" className="text-base hover:text-gray-300 text-gray-50">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Support */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-6 mt-5">Support</h5>
            <ul>
              <li className='mb-3'><a href="#" className="text-base hover:text-gray-300 text-gray-50">FAQ</a></li>
              <li className='mb-3'><a href="#" className="text-base hover:text-gray-300 text-gray-50">Assistance</a></li>
              <li className='mb-3'><a href="#" className="text-base hover:text-gray-300 text-gray-50">Terms & Conditions</a></li>
              <li className='mb-3'><a href="#" className="text-base hover:text-gray-300 text-gray-50">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-6 mt-5">Contact Us</h5>
            <ul>
              <li className="mb-3 text-base">Email: contact@entreprise.com</li>
              <li className="mb-3 text-base">Phone: +33 1 23 45 67 89</li>
              <li className="mb-3 text-base">Address: 123 Rue Exemple, Paris</li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <span className="text-lg text-gray-500 mb-4 md:mb-0">&copy; <a href="/" className='hover:text-gray-400 transition duration-500'>WiyoRent {currentYear}, </a>All rights reserved.</span>
          <div className="flex space-x-6">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
