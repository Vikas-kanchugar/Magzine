import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTwitter, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-200 border-t border-gray-200 dark:border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">EDITIONS</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Exploring the intersection of culture, fashion, and ideas through unparalleled storytelling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/issues" className="hover:text-black dark:hover:text-white transition-colors">Issues</Link></li>
              <li><Link to="/contributors" className="hover:text-black dark:hover:text-white transition-colors">Contributors</Link></li>
              <li><Link to="/subscribe" className="hover:text-black dark:hover:text-white transition-colors">Subscribe</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/category/fashion" className="hover:text-black dark:hover:text-white transition-colors">Fashion</Link></li>
              <li><Link to="/category/culture" className="hover:text-black dark:hover:text-white transition-colors">Culture</Link></li>
              <li><Link to="/category/food" className="hover:text-black dark:hover:text-white transition-colors">Food</Link></li>
              <li><Link to="/category/travel" className="hover:text-black dark:hover:text-white transition-colors">Travel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a whileHover={{ y: -3 }} href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FiTwitter size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FiInstagram size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FiMail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-300 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} EDITIONS Magazine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;