import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '../store/useCartStore';
import { OrderCard } from '../components/admin/OrderCard';
import { Order } from '../types/cart';

type OrderFilter = 'all' | Order['status'];

export function Admin() {
  const orders = useCartStore((state) => state.orders);
  const [filter, setFilter] = useState<OrderFilter>('all');

  const filteredOrders = orders
    .filter((order) => filter === 'all' || order.status === filter)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const filterOptions: OrderFilter[] = ['all', 'pending', 'confirmed', 'preparing', 'ready', 'completed'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Management</h1>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option === 'all' ? 'All Orders' : option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
        {filteredOrders.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-gray-500 py-8"
          >
            No orders found
          </motion.p>
        )}
      </div>
    </div>
  );
}