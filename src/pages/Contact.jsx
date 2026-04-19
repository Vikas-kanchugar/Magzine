import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'editorial',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', type: 'editorial', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="pt-32 pb-20 container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-sm uppercase tracking-wider text-gray-500">Get in Touch</span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mt-2">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Have a story idea? Want to advertise with us? We'd love to hear from you.
        </p>
      </motion.div>
      
      <div className="max-w-2xl mx-auto">
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-lg bg-green-500 text-white text-center"
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-200 border ${
                errors.name ? 'border-red-500' : 'border-gray-200 dark:border-dark-300'
              } focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-200 border ${
                errors.email ? 'border-red-500' : 'border-gray-200 dark:border-dark-300'
              } focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Inquiry Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-dark-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            >
              <option value="editorial">Editorial Pitch</option>
              <option value="advertising">Advertising Inquiry</option>
              <option value="general">General Question</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message *</label>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-200 border ${
                errors.message ? 'border-red-500' : 'border-gray-200 dark:border-dark-300'
              } focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;