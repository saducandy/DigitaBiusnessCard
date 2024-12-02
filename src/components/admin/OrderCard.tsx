import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Coffee, Utensils, Check } from 'lucide-react';
import { Order } from '../../types/cart';
import { useCartStore } from '../../store/useCartStore';
import { Badge } from '../ui/Badge';

const statusIcons = {
  pending: Clock,
  confirmed: CheckCircle2,
  preparing: Coffee,
  ready: Utensils,
  completed: Check,
};

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  preparing: 'bg-purple-100 text-purple-800',
  ready: 'bg-green-100 text-green-800',
  completed: 'bg-gray-100 text-gray-800',
};

export function OrderCard({ order }: { order: Order }) {
  const updateOrderStatus = useCartStore((state) => state.updateOrderStatus);
  const StatusIcon = statusIcons[order.status];

  const nextStatus: Record<Order['status'], Order['status']> = {
    pending: 'confirmed',
    confirmed: 'preparing',
    preparing: 'ready',
    ready: 'completed',
    completed: 'completed',
  };

  const handleUpdateStatus = () => {
    if (order.status !== 'completed') {
      updateOrderStatus(order.id, nextStatus[order.status]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 space-y-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold">Order #{order.id}</h3>
            {order.tableNumber && (
              <Badge variant="default">Table {order.tableNumber}</Badge>
            )}
          </div>
          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${statusColors[order.status]}`}>
          <StatusIcon className="w-4 h-4" />
          <span className="text-sm font-medium capitalize">{order.status}</span>
        </div>
      </div>

      <div className="space-y-2">
        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              {item.specialInstructions && (
                <p className="text-sm text-gray-500">Note: {item.specialInstructions}</p>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm">x{item.quantity}</p>
              <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${order.total.toFixed(2)}</span>
        </div>
      </div>

      {order.status !== 'completed' && (
        <button
          onClick={handleUpdateStatus}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Mark as {nextStatus[order.status]}
        </button>
      )}
    </motion.div>
  );
}