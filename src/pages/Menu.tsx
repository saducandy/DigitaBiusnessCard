import React from 'react';
import { MenuSection } from '../components/menu/MenuSection';
import { menuData } from '../data/menuData';

export function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {menuData.sections.map((section) => (
        <MenuSection key={section.id} section={section} />
      ))}
    </div>
  );
}