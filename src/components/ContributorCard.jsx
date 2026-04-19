import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const ContributorCard = ({ contributor, index }) => {
  const socialIcons = {
    twitter: FiTwitter,
    instagram: FiInstagram,
    linkedin: FiLinkedin,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-gray-100 dark:bg-dark-300">
          <img
            src={contributor.image}
            alt={contributor.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-1">{contributor.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{contributor.role}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 line-clamp-3">{contributor.bio}</p>
        
        <div className="flex space-x-3">
          {Object.entries(contributor.social).map(([platform, url]) => {
            const Icon = socialIcons[platform];
            if (!Icon) return null;
            return (
              <motion.a
                key={platform}
                href={url}
                whileHover={{ y: -2 }}
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ContributorCard;