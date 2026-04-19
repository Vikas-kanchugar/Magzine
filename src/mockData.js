// src/data/mockData.js

// ========== ARTICLES (named export) ==========
export const articles = [
  {
    id: 1,
    title: "The Renaissance of Analog Photography",
    slug: "renaissance-of-analog-photography",
    previewImage: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600",
    excerpt: "In an era of digital saturation, photographers are rediscovering the tangible magic of film.",
    category: "Culture",
    categorySlug: "culture",
    author: "Elena Rodriguez",
    authorBio: "Elena is a renowned photography critic and curator based in Paris.",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    date: "March 15, 2024",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1200",
    tags: ["Photography", "Art", "Film", "Vintage"],
    content: `...` // keep your existing content
  },
  // ... all your other articles (2 to 12)
];

// ========== CATEGORIES (named export) ==========
export const categories = [
  {
    name: "Fashion",
    slug: "fashion",
    count: 12,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    description: "The latest in sustainable luxury, runway trends, and the business of fashion.",
    longDescription: "Fashion is more than clothing — it's identity, art, and politics...",
    subcategories: ["Womenswear", "Menswear", "Accessories", "Sustainable Fashion"],
  },
  {
    name: "Culture",
    slug: "culture",
    count: 8,
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400",
    description: "Art, literature, film, and the ideas shaping our creative landscape.",
  },
  {
    name: "Food",
    slug: "food",
    count: 7,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400",
    description: "Culinary innovation, chef profiles, and the stories behind what we eat.",
  },
  {
    name: "Travel",
    slug: "travel",
    count: 12,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400",
    description: "Off-grid adventures, slow travel, and destinations that transform.",
  },
  {
    name: "Technology",
    slug: "technology",
    count: 5,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    description: "How innovation is reshaping creativity, work, and daily life.",
  },
  {
    name: "Design",
    slug: "design",
    count: 6,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400",
    description: "Architecture, interiors, and the art of shaping our environment.",
  },
  {
    name: "Wellness",
    slug: "wellness",
    count: 4,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400",
    description: "Mind, body, and the art of balance in a hectic world.",
  },
  {
    name: "Business",
    slug: "business",
    count: 3,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
    description: "Sustainable commerce, entrepreneurship, and the future of work.",
  },
  {
    name: "Art",
    slug: "art",
    count: 3,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400",
    description: "Visual expression, from classical to digital and everything between.",
  },
];

// ========== ISSUES (named export) ==========
export const issues = [
  {
    id: 1,
    title: "Spring 2024: The Renaissance Issue",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
    date: "March 2024",
    year: 2024,
    month: 3,
    description: "Exploring rebirth in art, culture, and society",
  },
  {
    id: 2,
    title: "Winter 2023: The Future Issue",
    cover: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600",
    date: "December 2023",
    year: 2023,
    month: 12,
    description: "Visionary ideas shaping tomorrow",
  },
  {
    id: 3,
    title: "Fall 2023: The Heritage Issue",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600",
    date: "September 2023",
    year: 2023,
    month: 9,
    description: "Traditions reimagined for modern times",
  },
  {
    id: 4,
    title: "Summer 2023: The Wanderlust Issue",
    cover: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600",
    date: "June 2023",
    year: 2023,
    month: 6,
    description: "Stories from the road less traveled",
  },
];

// ========== CONTRIBUTORS (named export) ==========
export const contributors = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Senior Culture Editor",
    bio: "Elena has spent two decades documenting cultural shifts...",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    social: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  // add your other contributors here
];

// Also keep a default export if any other file imports it (optional)
const mockData = { articles, categories, issues, contributors };
export default mockData;