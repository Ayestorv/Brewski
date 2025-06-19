'use client';

import { motion } from 'framer-motion';

interface WizardStepProps {
  title: string;
  question: string;
  options: {
    id: string;
    label: string;
    value: string;
    description?: string;
  }[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export default function WizardStep({
  title,
  question,
  options,
  selectedValue,
  onSelect,
}: WizardStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-xl text-gray-600 mb-8">{question}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <motion.button
            key={option.id}
            onClick={() => onSelect(option.value)}
            className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${
              selectedValue === option.value
                ? 'border-primary bg-primary text-white'
                : 'border-gray-200 bg-white hover:border-primary hover:shadow-lg'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="font-semibold text-lg mb-1">{option.label}</h3>
            {option.description && (
              <p
                className={`text-sm ${
                  selectedValue === option.value ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {option.description}
              </p>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
