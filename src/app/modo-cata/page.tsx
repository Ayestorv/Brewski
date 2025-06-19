'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BeerSelector from '@/components/modo-cata/BeerSelector';
import TastingConfirmation from '@/components/modo-cata/TastingConfirmation';

export default function ModoCataPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Modo Cata</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your personalized beer tasting flight. Select up to 5 beers to sample and compare
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showConfirmation ? (
            <BeerSelector onComplete={() => setShowConfirmation(true)} />
          ) : (
            <TastingConfirmation onBack={() => setShowConfirmation(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
