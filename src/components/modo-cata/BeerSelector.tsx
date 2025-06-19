'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useModoCataStore } from '@/store/modoCataStore';
import beersData from '@/data/beers.json';
import { Beer } from '@/types';
import VoiceNoteModal from './VoiceNoteModal';

interface BeerSelectorProps {
  onComplete: () => void;
}

export default function BeerSelector({ onComplete }: BeerSelectorProps) {
  const { selectedBeers, addBeer, removeBeer, isSelected, canAddMore, clearSelection } =
    useModoCataStore();
  const beers = beersData as Beer[];
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedBeers.length === 5) {
      setShowModal(true);
    }
  }, [selectedBeers.length]);

  const handleModalConfirm = () => {
    alert('Your tasting flight has been ordered! A server will bring it to your table shortly.');
    clearSelection();
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Selection</h2>
            <p className="text-gray-600">{selectedBeers.length} of 5 beers selected</p>
          </div>
          <button
            onClick={onComplete}
            disabled={selectedBeers.length === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              selectedBeers.length > 0
                ? 'bg-primary text-white hover:bg-red-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue to Confirmation
          </button>
        </div>

        {selectedBeers.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedBeers.map((beer) => (
              <span
                key={beer.id}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
              >
                {beer.name}
                <button
                  onClick={() => removeBeer(beer.id)}
                  className="ml-2 hover:text-red-700"
                  aria-label={`Remove ${beer.name}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {beers.map((beer, index) => {
          const selected = isSelected(beer.id);
          const disabled = !selected && !canAddMore();

          return (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => (selected ? removeBeer(beer.id) : addBeer(beer))}
                disabled={disabled}
                className={`w-full text-left transition-all duration-200 ${
                  disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <div
                  className={`card hover:shadow-lg h-full ${
                    selected ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                >
                  <div className="relative h-32 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full" />
                    </div>
                    {selected && (
                      <div className="absolute top-2 right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{beer.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{beer.style}</p>
                  <p className="text-primary font-semibold">{beer.abv}% ABV</p>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      <VoiceNoteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedBeers={selectedBeers}
        onConfirm={handleModalConfirm}
      />
    </motion.div>
  );
}
