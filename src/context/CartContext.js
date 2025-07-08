import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        toast.success(`Added another ${item.name} to cart!`);
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      toast.success(`${item.name} added to cart!`);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart(prev => {
      const item = prev.find(i => i.name === name);
      if (item) {
        toast.info(`Removed ${name} from cart`);
      }
      return prev.filter(item => item.name !== name);
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Cart cleared');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
