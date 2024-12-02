import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, UtensilsCrossed, Coffee, ChefHat, ClipboardList } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/menu', icon: UtensilsCrossed, label: 'Menu' },
    { to: '/breakfast', icon: Coffee, label: 'Breakfast' },
    { to: '/mains', icon: ChefHat, label: 'Main Courses' },
    { to: '/admin', icon: ClipboardList, label: 'Admin' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}