import { createContext, useState, useEffect, useReducer } from "react";

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
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

const INITAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return { ...state, ...payload };

    case "SET_CART_OPEN":
      return { ...state, isCartOpen: payload };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITAL_STATE);
  const { cartItems, cartTotal, isCartOpen, cartCount } = state;

  const addItemToCart = (product) =>
    updateCartItems(addCartItem(cartItems, product));

  const removeItemFromCart = (product) =>
    updateCartItems(removeCartItem(cartItems, product));

  const deleteCartItem = (product) =>
    updateCartItems(deleteItem(cartItems, product));

  const updateCartItems = (cartItems) => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const cartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: { cartItems, cartCount, cartTotal },
    });
  };

  const setIsCartOpen = (bool) =>
    dispatch({ type: CART_ACTION_TYPES.SET_CART_OPEN, payload: bool });

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    deleteCartItem,
    cartTotal,
  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
