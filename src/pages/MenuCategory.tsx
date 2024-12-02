import React from 'react';
import { useParams } from 'react-router-dom';
import { MenuSection } from '../components/menu/MenuSection';
import { menuData } from '../data/menuData';

export function MenuCategory() {
  const { category } = useParams();
  const section = menuData.sections.find((s) => s.id === category);

  if (!section) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900">Category not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <MenuSection section={section} />
    </div>
  );
}