import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, layout = 'vertical', index = 0 }) => {
  const isHorizontal = layout === 'horizontal';
  const isLarge = layout === 'large';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5 }}
      className={`group cursor-pointer ${isHorizontal ? 'flex gap-6' : ''} ${isLarge ? 'col-span-2' : ''}`}
    >
      <Link to={`/article/${article.id}`} className="block w-full">
        <div className={`relative overflow-hidden rounded-2xl ${isHorizontal ? 'w-1/3' : 'w-full'}`}>
          <div className={`${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'} bg-gray-100 dark:bg-dark-200 overflow-hidden`}>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className={`mt-4 ${isHorizontal ? 'flex-1' : ''}`}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <h3 className={`font-serif font-bold mb-2 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors ${isLarge ? 'text-3xl' : 'text-xl'}`}>
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs font-medium">{article.author}</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">{article.readTime} min read</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ArticleCard;