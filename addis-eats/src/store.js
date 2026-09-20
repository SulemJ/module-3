import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  total: 0,
  addItem: (dish) => set((state) => ({ 
    items: [...state.items, dish],
    total: state.total + dish.price 
  })),
  clearCart: () => set({ items: [], total: 0 })
}));