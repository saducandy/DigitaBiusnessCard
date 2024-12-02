import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { type MenuItemType } from '../../types/menu';
import { useCartStore } from '../../store/useCartStore';
import toast from 'react-hot-toast';

export function MenuItem({ item }: { item: MenuItemType }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
    });
    toast.success(`Added ${item.name} to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            <div className="flex gap-2 mt-2">
              {item.isVegetarian && <Badge variant="success">Vegetarian</Badge>}
              {item.isSpicy && <Badge variant="danger">Spicy</Badge>}
              {item.isGlutenFree && <Badge variant="warning">Gluten Free</Badge>}
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-blue-600">
              ${item.price.toFixed(2)}
            </span>
            {item.calories && (
              <p className="text-sm text-gray-500">{item.calories} cal</p>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            {item.category}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}