export const menuData = {
  sections: [
    {
      id: 'breakfast',
      name: 'Breakfast',
      timing: '7:00 AM - 11:00 AM',
      description: 'Start your day with our delicious breakfast selections, featuring both classic favorites and healthy options.',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80',
      items: [
        {
          id: 'b1',
          name: 'Classic Benedict',
          description: 'Poached eggs, Canadian bacon, hollandaise sauce on English muffin',
          price: 16.95,
          calories: 850,
          image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80',
          category: 'Eggs'
        },
        {
          id: 'b2',
          name: 'Avocado Toast',
          description: 'Smashed avocado, poached eggs, cherry tomatoes, microgreens',
          price: 14.95,
          calories: 520,
          isVegetarian: true,
          isGlutenFree: true,
          image: 'https://images.unsplash.com/photo-1603046891744-56e9c3c19f41?auto=format&fit=crop&w=600&q=80',
          category: 'Healthy'
        },
        {
          id: 'b3',
          name: 'Belgian Waffle',
          description: 'Fresh berries, whipped cream, maple syrup',
          price: 13.95,
          calories: 680,
          isVegetarian: true,
          image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
          category: 'Sweet'
        }
      ]
    },
    {
      id: 'mains',
      name: 'Main Courses',
      timing: '11:00 AM - 10:00 PM',
      description: 'Indulge in our carefully crafted main courses, featuring the finest ingredients and expert preparation.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      items: [
        {
          id: 'm1',
          name: 'Grilled Salmon',
          description: 'Atlantic salmon, quinoa, roasted vegetables, lemon butter sauce',
          price: 28.95,
          calories: 720,
          isGlutenFree: true,
          image: 'https://images.unsplash.com/photo-1567159644489-0ef49dfbe753?auto=format&fit=crop&w=600&q=80',
          category: 'Seafood'
        },
        {
          id: 'm2',
          name: 'Spicy Chicken Curry',
          description: 'Free-range chicken, aromatic rice, naan bread',
          price: 24.95,
          calories: 850,
          isSpicy: true,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
          category: 'Poultry'
        },
        {
          id: 'm3',
          name: 'Mushroom Risotto',
          description: 'Arborio rice, wild mushrooms, parmesan, truffle oil',
          price: 22.95,
          calories: 680,
          isVegetarian: true,
          isGlutenFree: true,
          image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80',
          category: 'Vegetarian'
        }
      ]
    }
  ]
};