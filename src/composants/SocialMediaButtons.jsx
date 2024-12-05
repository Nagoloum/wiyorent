import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

function SocialMediaButtons() {
  return (
    <div className="flex space-x-4 justify-center">
      {/* WhatsApp */}
      <a
        href="https://wa.me/"
        className="text-gray-600 hover:text-green-500 transition-colors duration-500"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>
      {/* Facebook */}
      <a
        href="https://facebook.com"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-500"
        aria-label="Facebook"
      >
        <FaFacebook size={25} />
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com"
        className="text-gray-600 hover:text-pink-500 transition-colors duration-500"
        aria-label="Instagram"
      >
        <FaInstagram size={25} />
      </a>
      {/* TikTok */}
      <a
        href="https://tiktok.com"
        className="text-gray-600 hover:text-red-400 transition-colors duration-500"
        aria-label="TikTok"
      >
        <FaTiktok size={25} />
      </a>
      {/* Twitter */}
      <a
        href="https://twitter.com"
        className="text-gray-600 hover:text-blue-400 transition-colors duration-500"
        aria-label="Twitter"
      >
        <FaTwitter size={25} />
      </a>
      {/* Phone */}
      <a
        href="tel:2147143124"
        className="text-gray-600 hover:text-green-600 transition-colors duration-500"
        aria-label="Phone"
      >
        <FaPhone size={25} />
      </a>
      {/* Email */}
      <a
        href="mailto:irenebraiding17@gmail.com"
        className="text-gray-600 hover:text-yellow-500 transition-colors duration-500"
        aria-label="Email"
      >
        <FaEnvelope size={25} />
      </a>
    </div>
  );
}

export default SocialMediaButtons;
