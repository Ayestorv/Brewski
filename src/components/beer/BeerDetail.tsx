'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Beer } from '@/types';
import { findMatchingBeers } from '@/lib/beerMatcher';

interface BeerDetailProps {
  beer: Beer;
}

export default function BeerDetail({ beer }: BeerDetailProps) {
  // Get similar beers
  const similarBeers = findMatchingBeers({ flavor: beer.style.toLowerCase() })
    .filter((b) => b.id !== beer.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
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
            Back to Beer Finder
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full" />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{beer.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{beer.style}</p>

              <div className="flex items-center space-x-6 mb-6">
                <div>
                  <span className="text-gray-600">ABV</span>
                  <p className="text-2xl font-bold text-primary">{beer.abv}%</p>
                </div>
                {beer.ibu && (
                  <div>
                    <span className="text-gray-600">IBU</span>
                    <p className="text-2xl font-bold text-primary">{beer.ibu}</p>
                  </div>
                )}
                {beer.brewery && (
                  <div>
                    <span className="text-gray-600">Brewery</span>
                    <p className="text-lg font-semibold">{beer.brewery}</p>
                  </div>
                )}
              </div>

              <p className="text-gray-700 text-lg mb-8">{beer.description}</p>

              {beer.foodPairings && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Perfect Pairings</h3>
                  <div className="flex flex-wrap gap-2">
                    {beer.foodPairings.map((pairing, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {pairing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Tasting Notes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {Object.entries(beer.tastingNotes).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <h4 className="font-semibold text-primary capitalize mb-2">{key}</h4>
                  <p className="text-gray-700 text-sm">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {similarBeers.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {similarBeers.map((similarBeer, index) => (
                  <motion.div
                    key={similarBeer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/beers/${similarBeer.id}`}>
                      <div className="card hover:shadow-xl cursor-pointer">
                        <h3 className="font-bold text-lg mb-2">{similarBeer.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{similarBeer.style}</p>
                        <p className="text-primary font-semibold">{similarBeer.abv}% ABV</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
