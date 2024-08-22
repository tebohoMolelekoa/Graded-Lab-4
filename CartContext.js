// cartContext.js
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeFromCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };