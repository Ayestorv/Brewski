'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWizardStore } from '@/store/wizardStore';
import WizardStep from './WizardStep';
import WizardResults from './WizardResults';

const wizardSteps = [
  {
    id: 'flavor',
    title: 'Flavor Profile',
    question: 'What flavors do you enjoy?',
    options: [
      {
        id: '1',
        label: 'Hoppy & Bitter',
        value: 'hoppy',
        description: 'Citrus, pine, and floral notes',
      },
      {
        id: '2',
        label: 'Malty & Sweet',
        value: 'malty',
        description: 'Caramel, toffee, and bread',
      },
      {
        id: '3',
        label: 'Fruity & Tart',
        value: 'fruity',
        description: 'Berry, tropical, and sour notes',
      },
      {
        id: '4',
        label: 'Roasted & Dark',
        value: 'roasted',
        description: 'Coffee, chocolate, and smoky',
      },
    ],
  },
  {
    id: 'body',
    title: 'Body & Feel',
    question: 'How do you like your beer to feel?',
    options: [
      {
        id: '1',
        label: 'Light & Crisp',
        value: 'light',
        description: 'Refreshing and easy-drinking',
      },
      { id: '2', label: 'Medium Body', value: 'medium', description: 'Balanced and smooth' },
      { id: '3', label: 'Full & Rich', value: 'full', description: 'Bold and satisfying' },
      { id: '4', label: 'No Preference', value: 'any', description: 'Surprise me!' },
    ],
  },
  {
    id: 'pairing',
    title: 'Food Pairing',
    question: 'What are you eating with your beer?',
    options: [
      { id: '1', label: 'Spicy Food', value: 'spicy', description: 'Tacos, wings, curry' },
      { id: '2', label: 'Grilled Meats', value: 'grilled', description: 'BBQ, burgers, steaks' },
      { id: '3', label: 'Seafood', value: 'seafood', description: 'Fish, shellfish, sushi' },
      {
        id: '4',
        label: 'Desserts',
        value: 'dessert',
        description: 'Chocolate, pastries, ice cream',
      },
    ],
  },
  {
    id: 'abv',
    title: 'Alcohol Strength',
    question: 'How strong do you want your beer?',
    options: [
      { id: '1', label: 'Session (< 5%)', value: 'low', description: 'Light and sessionable' },
      { id: '2', label: 'Standard (5-7%)', value: 'medium', description: 'Classic strength' },
      { id: '3', label: 'Strong (> 7%)', value: 'high', description: 'Bold and warming' },
      { id: '4', label: 'No Preference', value: 'any', description: "Doesn't matter to me" },
    ],
  },
];

export default function WizardContainer() {
  const { currentStep, answers, setCurrentStep, setAnswer, resetWizard } = useWizardStore();
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    resetWizard();
    setShowResults(false);
  };

  const currentStepData = wizardSteps[currentStep];
  const currentAnswer = answers[currentStepData?.id];

  if (showResults) {
    return <WizardResults answers={answers} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-[600px] flex flex-col">
      <div className="mb-8">
        <div className="flex justify-between items-center max-w-2xl mx-auto mb-4">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {wizardSteps.length}
          </span>
          <div className="flex space-x-2">
            {wizardSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-16 rounded-full transition-colors duration-300 ${
                  index <= currentStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <WizardStep
            key={currentStepData.id}
            title={currentStepData.title}
            question={currentStepData.question}
            options={currentStepData.options}
            selectedValue={currentAnswer}
            onSelect={(value) => setAnswer(currentStepData.id, value)}
          />
        </AnimatePresence>
      </div>

      <div className="flex justify-between max-w-2xl mx-auto mt-12">
        <motion.button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            currentStep === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
          }`}
          whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
        >
          Back
        </motion.button>

        <motion.button
          onClick={handleNext}
          disabled={!currentAnswer}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            currentAnswer
              ? 'bg-primary text-white hover:bg-red-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          whileTap={currentAnswer ? { scale: 0.95 } : {}}
        >
          {currentStep === wizardSteps.length - 1 ? 'See Results' : 'Next'}
        </motion.button>
      </div>
    </div>
  );
}
