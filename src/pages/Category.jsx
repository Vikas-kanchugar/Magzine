import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard';
import { categories, articles } from "../Data/mockData.js"; // ← only one line

const Category = () => {
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState('date');
  const [filteredArticles, setFilteredArticles] = useState([]);
  
  const category = categories.find(c => c.slug === slug);
  
  useEffect(() => {
    let filtered = articles.filter(a => a.categorySlug === slug);
    
    if (sortBy === 'date') {
      filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'readTime') {
      filtered = filtered.sort((a, b) => a.readTime - b.readTime);
    }
    
    setFilteredArticles(filtered);
  }, [slug, sortBy]);

  if (!category) {
    return <div className="pt-32 text-center">Category not found</div>;
  }

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
              {category.name}
            </h1>
            <p className="text-white/80 text-lg mt-4">
              {category.count} articles
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-custom mt-12">
        {/* Sort Options */}
        <div className="flex justify-end mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-200 border-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          >
            <option value="date">Latest</option>
            <option value="readTime">Read Time</option>
          </select>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredArticles.map((article, index) => (
            <div key={article.id} className="break-inside-avoid">
              <ArticleCard article={article} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;