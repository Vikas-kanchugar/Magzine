import React from 'react';
import { motion } from 'framer-motion';

const IssueCard = ({ issue, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="aspect-[3/4] bg-gray-100 dark:bg-dark-200">
          <img
            src={issue.cover}
            alt={issue.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-xl font-serif font-bold mb-1">{issue.title}</h3>
            <p className="text-gray-300 text-sm">{issue.date}</p>
            <p className="text-gray-400 text-xs mt-2">{issue.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IssueCard;