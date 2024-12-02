export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  calories?: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isGlutenFree?: boolean;
  image?: string;
  category: string;
}

export interface MenuSectionType {
  id: string;
  name: string;
  timing?: string;
  description: string;
  image: string;
  items: MenuItemType[];
}