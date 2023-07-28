import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        :  cartItem 
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
