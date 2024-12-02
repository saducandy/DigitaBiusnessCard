import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[70vh] bg-black">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Grand Hotel Restaurant</h1>
            <p className="text-xl mb-8">Experience culinary excellence</p>
            <Link
              to="/menu"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              View Our Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Philosophy</h2>
            <p className="text-gray-600">
              At Grand Hotel Restaurant, we believe in creating memorable dining experiences
              through exceptional food, impeccable service, and elegant atmosphere.
              Our chefs use only the finest ingredients, sourced locally whenever possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">Opening Hours</h2>
            <div className="space-y-2 text-gray-600">
              <p>Breakfast: 7:00 AM - 11:00 AM</p>
              <p>Lunch & Dinner: 11:00 AM - 10:00 PM</p>
              <p>Bar: 11:00 AM - 11:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}