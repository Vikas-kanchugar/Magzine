import React from 'react';
import { motion } from 'framer-motion';
import ContributorCard from '../components/ContributorCard';
import { contributors } from '../data/mockData';

const Contributors = () => {
  return (
    <div className="pt-32 pb-20 container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-sm uppercase tracking-wider text-gray-500">Our Team</span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mt-2">Contributors</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Meet the writers, photographers, and editors who bring our stories to life.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributors.map((contributor, index) => (
          <ContributorCard key={contributor.id} contributor={contributor} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Contributors;