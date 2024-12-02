import React from 'react';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'default';

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-800',
  default: 'bg-gray-100 text-gray-800'
};

export function Badge({ 
  children, 
  variant = 'default' 
}: { 
  children: React.ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}