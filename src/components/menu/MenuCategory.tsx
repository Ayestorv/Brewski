'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MenuItem } from '@/types';

interface MenuCategoryProps {
  category: string;
  items: MenuItem[];
}

const categoryTitles: Record<string, string> = {
  appetizers: 'Appetizers',
  mains: 'Main Courses',
  sides: 'Sides',
  desserts: 'Desserts',
};

export default function MenuCategory({ category, items }: MenuCategoryProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/menu"
            className="inline-flex items-center text-primary hover:text-red-700 transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Menu
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {categoryTitles[category] || category}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-xl h-full flex flex-col"
              >
                <div className="relative h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🍽️</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-primary mb-3">${item.price}</p>
                <p className="text-gray-700 mb-4 flex-1">{item.description}</p>

                {item.ingredients && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 mb-1">Ingredients:</p>
                    <p className="text-sm text-gray-700">{item.ingredients.join(', ')}</p>
                  </div>
                )}

                <div className="flex items-center space-x-4 text-sm">
                  {item.isVegetarian && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      Vegetarian
                    </span>
                  )}
                  {item.isGlutenFree && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      Gluten-Free
                    </span>
                  )}
                  {item.calories && <span className="text-gray-600">{item.calories} cal</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
