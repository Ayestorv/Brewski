import { create } from 'zustand';

interface WizardState {
  currentStep: number;
  answers: Record<string, string>;
  setCurrentStep: (step: number) => void;
  setAnswer: (stepId: string, answer: string) => void;
  resetWizard: () => void;
}

export const useWizardStore = create<WizardState>((set) => ({
  currentStep: 0,
  answers: {},
  setCurrentStep: (step) => set({ currentStep: step }),
  setAnswer: (stepId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [stepId]: answer },
    })),
  resetWizard: () => set({ currentStep: 0, answers: {} }),
}));
