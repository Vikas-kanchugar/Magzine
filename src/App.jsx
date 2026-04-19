import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Issues from './pages/Issues';
import Article from './pages/Article';
import Category from './pages/Category';
import Contributors from './pages/Contributors';
import Subscribe from './pages/Subscribe';
import Contact from './pages/Contact';

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-white dark:bg-dark-100">
        <Navbar />
        <ThemeToggle />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
};

export default App;