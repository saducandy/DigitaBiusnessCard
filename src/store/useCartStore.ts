import { create } from 'zustand';
import { CartItem, Order } from '../types/cart';

interface CartStore {
  items: CartItem[];
  orders: Order[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateInstructions: (id: string, instructions: string) => void;
  clearCart: () => void;
  placeOrder: (tableNumber?: number) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  orders: [],
  
  addItem: (newItem) => set((state) => {
    const existingItem = state.items.find(item => item.id === newItem.id);
    
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    
    return {
      items: [...state.items, { ...newItem, quantity: 1 }],
    };
  }),

  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id),
  })),

  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),

  updateInstructions: (id, instructions) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, specialInstructions: instructions } : item
    ),
  })),

  clearCart: () => set({ items: [] }),

  placeOrder: (tableNumber) => set((state) => {
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9),
      items: [...state.items],
      total: state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: 'pending',
      tableNumber,
      createdAt: new Date(),
    };

    return {
      orders: [...state.orders, newOrder],
      items: [],
    };
  }),

  updateOrderStatus: (orderId, status) => set((state) => ({
    orders: state.orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    ),
  })),
}));