import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar } from 'react-icons/fi';

const SubscribeCard = ({ plan, isRecommended = false, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        isRecommended 
          ? 'shadow-2xl scale-105 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-black'
          : 'shadow-lg bg-white dark:bg-dark-200'
      }`}
    >
      {isRecommended && (
        <div className="absolute top-4 right-4">
          <FiStar className="text-yellow-400 fill-yellow-400" size={24} />
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-sm">/{plan.period}</span>
        </div>
        <p className="text-sm opacity-80 mb-6">{plan.description}</p>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <FiCheck className="flex-shrink-0" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
            isRecommended
              ? 'bg-white text-black hover:bg-gray-100'
              : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
          }`}
        >
          Choose Plan
        </button>
      </div>
    </motion.div>
  );
};

export default SubscribeCard;