'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Beer,
  Utensils,
  MessageCircle,
  FlaskConical,
  TrendingUp,
  Users,
  Star,
  Calendar,
} from 'lucide-react';

const features = [
  {
    title: 'Beer Finder',
    description: 'Discover your perfect brew with our intelligent recommendation system',
    icon: Beer,
    href: '/beer-finder',
    color: 'bg-amber-500',
    gradient: 'from-amber-400 to-amber-600',
  },
  {
    title: 'Menu',
    description: 'Explore our delicious food offerings perfectly paired with our beers',
    icon: Utensils,
    href: '/menu',
    color: 'bg-emerald-500',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  {
    title: 'Modo Cata',
    description: 'Create personalized beer tasting flights with up to 5 selections',
    icon: FlaskConical,
    href: '/modo-cata',
    color: 'bg-purple-500',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Community Chat',
    description: 'Connect with fellow beer enthusiasts and share recommendations',
    icon: MessageCircle,
    href: '/chat',
    color: 'bg-blue-500',
    gradient: 'from-blue-400 to-blue-600',
  },
];

const stats = [
  { label: 'Craft Beers', value: '50+', icon: Beer },
  { label: 'Happy Customers', value: '10K+', icon: Users },
  { label: 'Years of Service', value: '15', icon: Calendar },
  { label: 'Average Rating', value: '4.8', icon: Star },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-amber-500/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
              Welcome to Brewstop
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Your ultimate destination for craft beer discovery and culinary excellence
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/beer-finder"
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Find Your Beer
              </Link>
              <Link
                href="/modo-cata"
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg border-2 border-primary"
              >
                Create Tasting Flight
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Brewstop</h2>
          <p className="text-xl text-gray-600">
            Everything you need for the perfect beer experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={feature.href}
                  className="block h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Brewstop?</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-amber-600 rounded-2xl p-12 text-white text-center"
        >
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">New This Week</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Try our latest rotating taps featuring exclusive craft brews from local breweries
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
          >
            View New Arrivals
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
