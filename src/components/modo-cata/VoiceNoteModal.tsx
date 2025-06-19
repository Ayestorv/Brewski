'use client';

import { motion } from 'framer-motion';
import { Mic, Beer as BeerIcon, Sparkles } from 'lucide-react';
import { Beer } from '@/types';
import Modal from '@/components/ui/Modal';

interface VoiceNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBeers: Beer[];
  onConfirm: () => void;
}

export default function VoiceNoteModal({
  isOpen,
  onClose,
  selectedBeers,
  onConfirm,
}: VoiceNoteModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Your Tasting Selection" size="lg">
      <div className="p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-gray-600">
            Record voice notes for each beer to capture your tasting experience
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {selectedBeers.map((beer, index) => (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                    <BeerIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{beer.name}</h3>
                    <p className="text-gray-600">
                      {beer.style} • {beer.abv}% ABV
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
                  onClick={() => {
                    // Demo only - no actual recording
                    alert(`Voice note feature coming soon for ${beer.name}!`);
                  }}
                >
                  <Mic className="w-5 h-5 text-primary group-hover:text-red-700 transition-colors duration-200" />
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    Add Note
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-amber-800">
            <strong>Demo Mode:</strong> Voice recording is currently simulated. In the full version,
            you&apos;ll be able to record and save tasting notes for each beer.
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
          >
            Back to Selection
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </Modal>
  );
}
