import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const item = cartItems.find((cartItem) => cartItem.id === product.id);

  if (item.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItem = (cartItems, product) =>
  cartItems.filter((item) => product.id !== item.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteCartItem: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(
    () =>
      setCartCount(
        cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
      ),
    [cartItems]
  );

  useEffect(
    () =>
      setCartTotal(
        cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
      ),
    [cartItems]
  );

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const removeItemFromCart = (product) =>
    setCartItems(removeCartItem(cartItems, product));

  const deleteCartItem = (product) =>
    setCartItems(deleteItem(cartItems, product));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    deleteCartItem,
    cartTotal
  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
