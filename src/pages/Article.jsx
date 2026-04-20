import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiTwitter, FiFacebook, FiLinkedin, FiLink, FiHeart, FiBookmark, 
  FiShare2, FiChevronLeft, FiChevronRight, FiZoomIn, FiX,
  FiClock, FiEye, FiSave, FiMessageCircle
} from 'react-icons/fi';
import { articles, getRelatedArticles, contributors } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === parseInt(id));
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: "Sarah Chen", text: "This article really resonated with me. Thanks for sharing!", date: "2 hours ago", likes: 5 },
    { id: 2, author: "Michael Park", text: "I've been thinking about this topic for months. Great insights!", date: "5 hours ago", likes: 3 }
  ]);

  const relatedArticles = getRelatedArticles(article, 3);
  const authorDetails = contributors.find(c => c.name === article?.author);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrolled / maxHeight) * 100;
      setProgress(percent);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <div className="pt-32 text-center">Article not found</div>;
  }

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  const handleShare = (platform) => {
    let url = '';
    switch(platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
        break;
      default:
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "You",
          text: comment,
          date: "Just now",
          likes: 0
        }
      ]);
      setComment('');
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 z-50 origin-left transition-transform duration-100"
           style={{ transform: `scaleX(${progress / 100})` }} />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category and Stats */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-4">
              <Link to={`/category/${article.categorySlug}`} className="hover:text-white transition-colors px-3 py-1 bg-white/20 rounded-full">
                {article.category}
              </Link>
              <div className="flex items-center gap-2">
                <FiClock size={14} />
                <span>{article.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <FiEye size={14} />
                <span>{article.statistics?.views?.toLocaleString()} views</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white max-w-4xl">
              {article.title}
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <p className="text-white font-medium">{article.author}</p>
                <p className="text-white/70 text-sm">{article.authorBio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Stats Bar */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-dark-300 pb-6 mb-8">
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold">{article.statistics?.views?.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Views</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{article.statistics?.shares?.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Shares</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{article.statistics?.saves?.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Saves</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-full transition-colors ${
                  liked ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300'
                }`}
              >
                <FiHeart size={18} className={liked ? 'fill-white' : ''} />
              </button>
              <button 
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-full transition-colors ${
                  saved ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300'
                }`}
              >
                <FiBookmark size={18} className={saved ? 'fill-white' : ''} />
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
                >
                  <FiShare2 size={18} />
                </button>
                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 p-2 bg-white dark:bg-dark-200 rounded-xl shadow-xl z-10 flex gap-2"
                    >
                      <button onClick={() => handleShare('twitter')} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg">🐦</button>
                      <button onClick={() => handleShare('facebook')} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg">📘</button>
                      <button onClick={() => handleShare('linkedin')} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg">🔗</button>
                      <button onClick={() => handleShare('copy')} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg">📋</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags?.map((tag) => (
              <Link 
                key={tag} 
                to={`/tag/${tag.toLowerCase()}`}
                className="px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
          
          {/* Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
                       prose-headings:font-serif prose-headings:font-bold
                       prose-p:text-gray-700 dark:prose-p:text-gray-300
                       prose-blockquote:border-l-4 prose-blockquote:border-gray-900 dark:prose-blockquote:border-gray-500
                       prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
                       prose-blockquote:font-serif prose-blockquote:text-xl
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-img:rounded-2xl prose-img:shadow-xl prose-img:cursor-pointer
                       first-letter:drop-cap"
            dangerouslySetInnerHTML={{ __html: article.content }}
            onClick={(e) => {
              if (e.target.tagName === 'IMG') {
                const images = Array.from(document.querySelectorAll('.prose img'));
                const index = images.indexOf(e.target);
                openLightbox(index);
              }
            }}
          />
          
          {/* Related Links */}
          {article.relatedLinks && article.relatedLinks.length > 0 && (
            <div className="my-12 p-6 bg-gray-50 dark:bg-dark-200 rounded-2xl">
              <h3 className="text-xl font-serif font-bold mb-4">Related Resources</h3>
              <ul className="space-y-2">
                {article.relatedLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      {link.title} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Author Bio Section */}
          {authorDetails && (
            <div className="my-12 p-8 bg-gray-50 dark:bg-dark-200 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img src={authorDetails.image} alt={authorDetails.name} className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">{authorDetails.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{authorDetails.role}</p>
                  <p className="text-gray-700 dark:text-gray-300">{authorDetails.fullBio || authorDetails.bio}</p>
                  <div className="flex gap-3 mt-4">
                    {Object.entries(authorDetails.social).map(([platform, url]) => (
                      <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Comments Section */}
          <div className="my-12">
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 text-xl font-serif font-bold mb-6 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <FiMessageCircle />
              Comments ({comments.length})
              <FiChevronRight className={`transform transition-transform ${showComments ? 'rotate-90' : ''}`} />
            </button>
            
            <AnimatePresence>
              {showComments && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6"
                >
                  <form onSubmit={handleAddComment} className="flex gap-3">
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-300 bg-white dark:bg-dark-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    />
                    <button type="submit" className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200">
                      Post
                    </button>
                  </form>
                  
                  {comments.map((c) => (
                    <div key={c.id} className="p-4 bg-gray-50 dark:bg-dark-200 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">{c.author}</p>
                          <p className="text-xs text-gray-500">{c.date}</p>
                        </div>
                        <button className="text-gray-400 hover:text-red-500">
                          <FiHeart size={14} />
                        </button>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{c.text}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-dark-300">
            <h3 className="text-2xl font-serif font-bold mb-8">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related, index) => (
                <ArticleCard key={related.id} article={related} index={index} showSaveButton={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <FiX size={24} />
            </button>
            
            <button 
              className="absolute left-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => Math.max(0, prev - 1));
              }}
            >
              <FiChevronLeft size={32} />
            </button>
            
            <img 
              src={article.gallery?.[currentImageIndex] || article.image}
              alt={`Gallery ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button 
              className="absolute right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => Math.min(article.gallery?.length - 1 || 0, prev + 1));
              }}
            >
              <FiChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Article;