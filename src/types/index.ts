export interface Beer {
  id: string;
  name: string;
  style: string;
  image: string;
  abv: number;
  description: string;
  tastingNotes: {
    appearance: string;
    aroma: string;
    flavor: string;
    mouthfeel: string;
    overall: string;
  };
  foodPairings?: string[];
  ibu?: number;
  brewery?: string;
}

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
  ingredients?: string[];
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  calories?: number;
}

export interface WizardStep {
  id: string;
  title: string;
  question: string;
  options: WizardOption[];
}

export interface WizardOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  message: string;
  timestamp: Date;
  avatar?: string;
}
