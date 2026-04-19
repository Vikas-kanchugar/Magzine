import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IssueCard from '../components/IssueCard';
import { issues } from '../data/mockData';   // ✅ only import what you need

const Issues = () => {
  const [filterYear, setFilterYear] = useState('all');
  
  const years = ['all', ...new Set(issues.map(issue => issue.year))];
  
  const filteredIssues = filterYear === 'all' 
    ? issues 
    : issues.filter(issue => issue.year === parseInt(filterYear));

  return (
    <div className="pt-32 pb-20 container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-sm uppercase tracking-wider text-gray-500">Archive</span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mt-2">All Issues</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore our complete collection of magazines, from our latest edition to our very first issue.
        </p>
      </motion.div>
      
      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center gap-4 mb-12 flex-wrap"
      >
        {years.map(year => (
          <button
            key={year}
            onClick={() => setFilterYear(year)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filterYear === year
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
            }`}
          >
            {year === 'all' ? 'All Issues' : year}
          </button>
        ))}
      </motion.div>
      
      {/* Issues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredIssues.map((issue, index) => (
          <IssueCard key={issue.id} issue={issue} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Issues;