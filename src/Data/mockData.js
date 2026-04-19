// src/data/mockData.js

export const articles = [
  {
    id: 1,
    title: "The Renaissance of Analog Photography",
    slug: "renaissance-of-analog-photography",
    excerpt: "In an era of digital saturation, photographers are rediscovering the tangible magic of film.",
    previewImage: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800",
    category: "Culture",
    categorySlug: "culture",
    author: "Elena Rodriguez",
    authorBio: "Elena is a renowned photography critic and curator based in Paris.",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    authorSocial: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      website: "https://elenarodriguez.com"
    },
    date: "March 15, 2024",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
      "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?w=800"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Photography", "Art", "Technology", "Film", "Creative Process"],
    relatedLinks: [
      { title: "The Rise of Film Photography", url: "https://example.com/film-photography" },
      { title: "Darkroom Techniques for Beginners", url: "https://example.com/darkroom" },
      { title: "Best Film Cameras 2024", url: "https://example.com/film-cameras" }
    ],
    relatedPosts: [2, 5],
    statistics: {
      views: 15420,
      shares: 2341,
      saves: 892
    },
    content: `...` // keep your full content, I'm shortening for display
  },
  // ... (keep all your other 5 articles exactly as you have them)
];

export const issues = [
  {
    id: 1,
    title: "Spring 2024: The Renaissance Issue",
    slug: "spring-2024-renaissance",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
    previewImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    date: "March 2024",
    year: 2024,
    month: 3,
    description: "Exploring rebirth in art, culture, and society",
    longDescription: "Our Spring 2024 issue celebrates renewal across creative disciplines...",
    featuredArticles: [1, 2, 3],
    editorNote: "This issue represents a turning point...",
    buyLink: "https://example.com/buy/spring-2024",
    digitalPrice: 9.99,
    printPrice: 24.99,
  },
  // ... (keep all your other 3 issues)
];

export const contributors = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Senior Culture Editor",
    bio: "Elena has spent two decades documenting cultural shifts...",
    fullBio: "Born in Barcelona and based in Paris...",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      website: "https://elenarodriguez.com"
    },
    expertise: ["Photography", "Cultural Criticism", "Art History"],
    articles: [1],
    email: "elena@editionsmag.com",
    location: "Paris, France",
    joinedDate: "January 2023",
  },
  // ... (keep all your other 5 contributors)
];

export const categories = [
  { 
    name: "Fashion", 
    slug: "fashion", 
    count: 12, 
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    description: "The latest in sustainable luxury, runway trends, and the business of fashion.",
    featuredArticle: 2,
    subcategories: ["Womenswear", "Menswear", "Accessories", "Sustainable Fashion"]
  },
  { 
    name: "Culture", 
    slug: "culture", 
    count: 8, 
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400",
    description: "Art, literature, film, and the ideas shaping our creative landscape.",
    featuredArticle: 1,
    subcategories: ["Art", "Books", "Film", "Music", "Photography"]
  },
  { 
    name: "Food", 
    slug: "food", 
    count: 6, 
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400",
    description: "Culinary innovation, chef profiles, and the stories behind what we eat.",
    featuredArticle: 3,
    subcategories: ["Restaurants", "Recipes", "Chefs", "Food Culture"]
  },
  { 
    name: "Travel", 
    slug: "travel", 
    count: 10, 
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400",
    description: "Off-grid adventures, slow travel, and destinations that transform.",
    featuredArticle: 4,
    subcategories: ["Adventure", "Luxury Travel", "Off-Grid", "City Guides"]
  },
  { 
    name: "Technology", 
    slug: "technology", 
    count: 5, 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    description: "How innovation is reshaping creativity, work, and daily life.",
    featuredArticle: 5,
    subcategories: ["AI", "Gadgets", "Software", "Tech Ethics"]
  },
];

// Helper functions
export const getArticleBySlug = (slug) => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (categorySlug) => {
  return articles.filter(article => article.categorySlug === categorySlug);
};

export const getRelatedArticles = (article, limit = 3) => {
  if (!article.relatedPosts || article.relatedPosts.length === 0) {
    return articles
      .filter(a => a.category === article.category && a.id !== article.id)
      .slice(0, limit);
  }
  return articles.filter(a => article.relatedPosts.includes(a.id));
};

export const getArticlesByTag = (tag) => {
  return articles.filter(article => article.tags.includes(tag));
};

export const getIssueBySlug = (slug) => {
  return issues.find(issue => issue.slug === slug);
};

export const getContributorById = (id) => {
  return contributors.find(contributor => contributor.id === id);
};