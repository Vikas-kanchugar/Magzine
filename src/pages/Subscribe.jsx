import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SubscribeCard from '../components/SubscribeCard';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  
  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'month',
      description: 'Perfect for casual readers',
      features: ['Access to latest articles', 'Weekly newsletter', 'Limited to 5 articles/month'],
    },
    {
      name: 'Premium',
      price: 12,
      period: 'month',
      description: 'For dedicated readers',
      features: ['Unlimited article access', 'Download PDF editions', 'Exclusive content', 'Ad-free experience', 'Cancel anytime'],
    },
    {
      name: 'Pro',
      price: 120,
      period: 'year',
      description: 'Best value',
      features: ['Everything in Premium', '2 months free', 'Early access to issues', 'Contributor Q&A access', 'Physical magazine delivery'],
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-wider text-gray-500">Membership</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mt-2">Choose Your Plan</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Join our community of readers and get unlimited access to premium content, exclusive features, and more.
          </p>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <SubscribeCard
              key={plan.name}
              plan={plan}
              isRecommended={plan.name === 'Premium'}
              index={index}
            />
          ))}
        </div>
        
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-black"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-4">Free Newsletter</h2>
            <p className="mb-6 opacity-90">
              Get the best stories delivered to your inbox weekly. No spam, ever.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Subscribe;