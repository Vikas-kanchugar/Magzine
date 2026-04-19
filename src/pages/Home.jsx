import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import { categories, articles } from "../data/mockData.js";
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredArticles = articles.slice(0, 3);
  const trendingArticles = articles.slice(3, 6);

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Featured Stories Grid */}
      <section className="py-20 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-wider text-gray-500">Featured Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Editor's Picks</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>
      
      {/* Category Strips */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-wider text-gray-500">Discover</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Categories</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link to={`/category/${category.slug}`} key={category.slug}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white font-serif font-bold text-lg">{category.name}</h3>
                      <p className="text-gray-300 text-xs">{category.count} articles</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Articles Carousel */}
      <section className="py-20 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-wider text-gray-500">Trending Now</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Most Read</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;