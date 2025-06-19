'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your meal with our delicious appetizers',
    icon: '🍟',
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Hearty dishes to pair with your favorite brew',
    icon: '🍔',
  },
  {
    id: 'sides',
    name: 'Sides',
    description: 'Perfect accompaniments to any meal',
    icon: '🥗',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your dining experience',
    icon: '🍰',
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delicious food crafted to complement our amazing beer selection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/menu/${category.id}`}>
                <div className="card hover:shadow-xl cursor-pointer h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-semibold">
                    View Menu
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
