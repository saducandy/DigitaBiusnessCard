import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { type MenuSectionType } from '../../types/menu';

export function MenuSection({ section }: { section: MenuSectionType }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-12"
    >
      <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
        <img
          src={section.image}
          alt={section.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-2">{section.name}</h2>
          {section.timing && (
            <p className="text-sm opacity-90">Served: {section.timing}</p>
          )}
          <p className="mt-2 max-w-2xl">{section.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}