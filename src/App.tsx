import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { MenuCategory } from './pages/MenuCategory';
import { Admin } from './pages/Admin';
import { CartButton } from './components/cart/CartButton';
import { CartDrawer } from './components/cart/CartDrawer';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/:category" element={<MenuCategory />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <CartButton onClick={() => setIsCartOpen(true)} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Toaster position="bottom-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;