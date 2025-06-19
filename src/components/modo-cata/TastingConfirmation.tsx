'use client';

import { motion } from 'framer-motion';
import { useModoCataStore } from '@/store/modoCataStore';

interface TastingConfirmationProps {
  onBack: () => void;
}

export default function TastingConfirmation({ onBack }: TastingConfirmationProps) {
  const { selectedBeers, clearSelection } = useModoCataStore();

  const handleConfirm = () => {
    // In a real app, this would submit the order
    alert('Your tasting flight has been ordered! A server will bring it to your table shortly.');
    clearSelection();
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Confirm Your Tasting Flight</h2>

        <div className="space-y-4 mb-8">
          {selectedBeers.map((beer, index) => (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{beer.name}</h3>
                  <p className="text-gray-600">
                    {beer.style} • {beer.abv}% ABV
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">4oz sample</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/10 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-lg mb-2">Tasting Tips:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Start with lighter beers and progress to darker, stronger ones
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Cleanse your palate with water or crackers between samples
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Take notes on appearance, aroma, flavor, and finish
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Share and compare impressions with your friends
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
          >
            Back to Selection
          </button>
          <button
            onClick={handleConfirm}
            className="px-8 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-red-700 transition-all duration-200"
          >
            Order Tasting Flight
          </button>
        </div>
      </div>
    </motion.div>
  );
}
