'use client';

import { motion } from 'framer-motion';
import WizardContainer from '@/components/wizard/WizardContainer';

export default function BeerFinder() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Find Your Perfect Beer</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer a few quick questions and we&apos;ll recommend the ideal brew for your taste buds
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <WizardContainer />
        </motion.div>
      </div>
    </div>
  );
}
