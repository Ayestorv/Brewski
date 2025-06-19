import { create } from 'zustand';
import { Beer } from '@/types';

interface ModoCataState {
  selectedBeers: Beer[];
  maxBeers: number;
  addBeer: (beer: Beer) => void;
  removeBeer: (beerId: string) => void;
  clearSelection: () => void;
  isSelected: (beerId: string) => boolean;
  canAddMore: () => boolean;
}

export const useModoCataStore = create<ModoCataState>((set, get) => ({
  selectedBeers: [],
  maxBeers: 5,
  addBeer: (beer) =>
    set((state) => {
      if (state.selectedBeers.length >= state.maxBeers) return state;
      if (state.selectedBeers.some((b) => b.id === beer.id)) return state;
      return { selectedBeers: [...state.selectedBeers, beer] };
    }),
  removeBeer: (beerId) =>
    set((state) => ({
      selectedBeers: state.selectedBeers.filter((b) => b.id !== beerId),
    })),
  clearSelection: () => set({ selectedBeers: [] }),
  isSelected: (beerId) => get().selectedBeers.some((b) => b.id === beerId),
  canAddMore: () => get().selectedBeers.length < get().maxBeers,
}));
