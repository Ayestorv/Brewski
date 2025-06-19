'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { findMatchingBeers } from '@/lib/beerMatcher';
import { Beer } from '@/types';

interface WizardResultsProps {
  answers: Record<string, string>;
  onRestart: () => void;
}

export default function WizardResults({ answers, onRestart }: WizardResultsProps) {
  const matchedBeers = findMatchingBeers(answers);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Perfect Beers!</h2>
        <p className="text-xl text-gray-600">
          Based on your preferences, we recommend these amazing brews
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {matchedBeers.map((beer: Beer, index: number) => (
          <motion.div
            key={beer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/beers/${beer.id}`}>
              <div className="card hover:shadow-xl cursor-pointer h-full flex flex-col">
                <div className="relative h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{beer.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{beer.style}</p>
                <p className="text-primary font-semibold mb-3">{beer.abv}% ABV</p>
                <p className="text-gray-700 text-sm flex-1">{beer.description}</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-semibold text-gray-600">Perfect with:</p>
                  <p className="text-sm text-gray-700">
                    {beer.foodPairings?.slice(0, 2).join(', ')}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button onClick={onRestart} className="btn-secondary mr-4">
          Try Again
        </button>
        <Link href="/menu" className="btn-primary inline-block">
          View Food Menu
        </Link>
      </div>
    </motion.div>
  );
}
